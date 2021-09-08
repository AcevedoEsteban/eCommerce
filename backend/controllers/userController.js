import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc Auth user & get token
// @route Post /api/users/login
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const users = await User.findOne({ email });
});

export { authUser };
