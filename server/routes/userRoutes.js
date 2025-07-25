import express from "express";
import {
  loginUser,
  registerUser,
  userCredits,
} from "../controllers/userController.js";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredits);

// Razorpay Payment Gateway
// userRouter.post('/pay-razor',userAuth, paymentRazorpay)
// userRouter.post('/verify-razor',verifyRazorpay)

export default userRouter;
