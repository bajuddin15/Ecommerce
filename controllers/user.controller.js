import User from "../models/user.model.js";

/* Admin - GET */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Users found",
      data: users,
    });
  } catch (error) {
    console.log("Error at getAllUsers controller : ", error.message);
    res.status(500).json({ success: false, message: error?.message });
  }
};

/* User - PUT */
const editSingleUser = async (req, res) => {
  const { userId } = req.params;
  const { name, mobile } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.name = name || user.name;
    user.mobile = mobile || user.mobile;

    await user.save();

    res.status(200).json({
      success: true,
      message: "User updated",
      data: user,
    });
  } catch (error) {
    console.log("Error at editSingleUser controller : ", error.message);
    res.status(500).json({ success: false, message: error?.message });
  }
};

export { getAllUsers, editSingleUser };
