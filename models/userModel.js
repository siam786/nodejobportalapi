import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import mongoose from "mongoose";
import validator from "validator";

//schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password length should be 6  character"],
    },
    location: {
      type: String,
      default: "Dhundia",
    },
  },
  { timestamps: true }
);
//middleware as hash password generator
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
//jwt webtoken
userSchema.methods.createJWT = function () {
  return JWT.sign({ userID: this._id }, process.env.JWT_TOKEN, {
    expiresIn: "1d",
  });
};
export default mongoose.model("User", userSchema);
