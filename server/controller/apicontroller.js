import bcrypt from "bcrypt";
import UserModel from "../model/usermodel.js";

export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const existsUsername = await UserModel.findOne({ username });
    if (existsUsername) {
      return res.status(400).send({ error: "Please input Unique Username" });
    }

    const existsEmail = await UserModel.findOne({ email });
    if (existsEmail) {
      return res.status(400).send({ error: "Please use unique emailId" });
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new UserModel({
        username,
        hashedPassword,
        email,
      });
      await user.save();
      return res.status(200).send({ msg: "Registered Successfully" });
    } else {
      return res.status(400).send({ error: "Password is required" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      res.status(404).send({ error: "User not found" });
    }

    const isPassword = await bcrypt.compare(password, password);

    if (isPassword) {
      res.status(200).send({ msg: "Login Successfully" });
    } else {
      res.status(505).send({ msg: "Invalid Password" });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export const getUser = async (req, res) => {
  res.json("getUser route");
};

export const updateUser = async (req, res) => {
  res.json("Update route");
};

export const generateOTP = async (req, res) => {
  res.json("generateOTP route");
};

export const verifyOTP = async (req, res) => {
  res.json("verifyOTP route");
};

export const createResetSession = async (req, res) => {
  res.json("createResetSession route");
};

export const resetPassword = async (req, res) => {
  res.json("resetPassword route");
};
