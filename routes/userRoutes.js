import express from 'express'
import { updateUserController } from "../controllers/userController.js";
import userAuth from "../middleweares/authMiddlewares.js";
// router Object
const router = express.Router();

//update user || PATCH || PUT
router.put("/update-user",userAuth, updateUserController);

export default router;
