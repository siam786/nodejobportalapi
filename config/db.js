import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connect to mongodb Database ${mongoose.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`MOngoDB Error ${error}`.bgRed.white);
  }
};

export default connectDB;
