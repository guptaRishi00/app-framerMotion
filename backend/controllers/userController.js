const { generateToken } = require("../config/generateToken");
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

//Register User
const createUser = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await UserModel.create({ fullname, email, password: hash });
    const token = generateToken(user);
    res.cookie("token", token);
    res.status(200).json({ user, token: token });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

//Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Wrong password" });
    }

    const token = generateToken(user);
    res.cookie("token", token);
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createUser,
  loginUser,
};
