import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Api to user Register

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log("req.body", req.body);

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }
    // validating email
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please provide a valide email address",
      });
    }

    // validating password

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "enter a strong password",
      });
    }
    //hashing password
    // console.log("Mongo URI:", process.env.MONGODB_URI);
    // console.log("JWT Secret:", process.env.JWT_SECRET);
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashPassword,
    };

    const newUser = new userModel(userData);

    const user = await newUser.save();
    // console.log("Mongo URI:", process.env.MONGODB_URI);
    // console.log("JWT Secret:", process.env.JWT_SECRET);
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log("error is ", error);
    res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user does not exist " });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid creadetials  " });
    }
  } catch (error) {
    console.log("error is ", error);
    res.json({ success: false, message: error.message });
  }
};

export { registerUser, loginUser };
