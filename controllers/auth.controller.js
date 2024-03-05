import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateToken.js";

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(409)
        .json({ success: false, message: "User already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    generateTokenAndSetCookie(newUser?._id, res);

    res.status(201).json({
      success: true,
      message: "Signup successfully.",
      data: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.log("signup controller error : ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res
        .status(404)
        .json({ success: false, message: "User doesn't exist" });
    }

    const isPasswordMatch = await bcrypt.compare(password, userExist.password);

    if (!isPasswordMatch) {
      return res
        .status(409)
        .json({ success: false, message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(userExist?._id, res);

    res.status(201).json({
      success: true,
      message: "Signin successfully.",
      data: {
        _id: userExist._id,
        name: userExist.name,
        email: userExist.email,
        role: userExist.role,
      },
    });
  } catch (error) {
    console.log("signin controller error : ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const logoutUser = (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    console.log("Error in Logout controller", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { signup, signin, logoutUser };
