//package imports
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
//file imports
import connectDB from "./config/db.js";
//routes
import errorMiddlewares from "./middleweares/errorMiddlewares.js";
import { default as authRoutes } from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import { default as userRoutes } from "./routes/userRoutes.js";

//dotenv config
dotenv.config();
//connect database
connectDB();
//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan());
app.use(cors("dev"));
//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
//port
//error middleware
app.use(errorMiddlewares);
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, () => {
  console.log(
    `Node Server running on way ${process.env.DEV_MODE} on port no ${PORT}`
      .bgCyan.blue
  );
});
