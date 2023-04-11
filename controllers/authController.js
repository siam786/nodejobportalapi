import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  /*if (!name) {
    next("Please add Name");
  }
  if (!email) {
    next("Please add Email");
  }
  if (!password) {
    next("Please add Password");
  }*/
  const existingUser = await userModel.findOne({ email });

  //create model
  const user = await userModel.create({ name, email, password });
  //jwt
  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "User Created Successfully",
    user,
    token,
  });
};
