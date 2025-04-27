import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userData = {
      name: name,
      email: email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token: token, user: { name: user.name } });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token: token, user: { name: user.name } });
    } else {
      return res.json({ success: false, message: "Invalid credential" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const userCredits = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);
    res.json({
      success: true,
      credits: user.creditBalance,
      user: {
        name: user.name,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Payment Razorpay
// const paymentRazorpay = async (req, res) => {
//   try {

//       const { userId, planId } = req.body
//       const userData = await userModel.findById(userId)

//       if (!userData || !planId) {
//           return res.json({ success: false, message: 'Missing Details' })
//       }

//       // creating options for razorpay payment
//       let credits, plan, amount, date

//       switch (planId) {
//           case 'Basic':
//               plan = 'Basic'
//               credits = 15
//               amount = 10
//               break;
//           case 'Advanced':
//               plan = 'Advanced'
//               credits = 100
//               amount = 50
//               break;
//           case 'Premier':
//               plan = 'Premier'
//               credits = 200
//               amount = 150
//               break;
      
//           default:
//               return res.json({success: false, message: 'plan not found'});
//       }

//       date = Date.now();

//       const transactionData ={
//           userId, plan, amount, credits, date
//       }

//       const newTransaction = await transactionModel.create(transactionData)

//       const options = {
//           amount:amount * 100,
//           currency: process.env.CURRENCY,
//           receipt: newTransaction._id,
//       }

//       await razorpayInstance.orders.create(options, (error, order)=>{
//           if (error) {
//               console.log(error);
//               return res.json({success:false, message:error})
//           }
//           res.json({success: true, order})
//       })


//   } catch (error) {
//       console.log(error)
//       res.json({ success: false, message: error.message })
//   }
// }

// API to verify payment of razorpay
// const verifyRazorpay = async (req, res) => {
//   try {
//       const { razorpay_order_id } = req.body
//       const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)

//       if (orderInfo.status === 'paid') {
//           const transactionData = await transactionModel.findById(orderInfo.receipt)
//           if (transactionData.payment) {
//               return res.json({success: false, message: 'Payment Failed'})
//           }

//           const userData = await userModel.findById(transactionData.userId)

//           const creditBalance = userData.creditBalance + transactionData.credits
//           await userModel.findByIdAndUpdate(userData._id, {creditBalance})
//           await transactionModel.findByIdAndUpdate(transactionData._id, {payment:true})
//           res.json({ success: true, message: "Credits Added" })
//       }
//       else {
//           res.json({ success: false, message: 'Payment Failed' })
//       }
//   } catch (error) {
//       console.log(error)
//       res.json({ success: false, message: error.message })
//   }
// }

export { registerUser, loginUser, userCredits };
