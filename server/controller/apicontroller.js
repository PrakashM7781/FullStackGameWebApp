import bcrypt from "bcrypt";
import UserModel from "../model/usermodel.js";
import Jwt from "jsonwebtoken";
import ENV from "../config.js";

export const register = async (req, res) => {
  try {
    const { username, name, password, email } = req.body;

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
      const savedUser = await UserModel.findOne({ username: user.username });

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
    const user = await UserModel.findOne({ username, password });
    if (!user) {
      res.status(404).send({ error: "User not found" });
      return; // Add return to exit the function after sending the response
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      // Create JWT token
      const token = Jwt.sign(
        {
          userId: user._id,
          username: user.username,
        },
        ENV.JWT_SECRET,
        { expiresIn: "24h" }
      );

      return res
        .status(200)
        .send({ msg: "Login Successfully", username, token });
    } else {
      res.status(401).send({ error: "Invalid Password" });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export const getUser = async (req, res) => {
  const { username } = req.params;

  try {
    if (!username) {
      return res.status(501).send("Invalid Username");
    }

    UserModel.findOne({ username }, (err, user) => {
      if (err) return res.status(500).send({ err });
      if (!user) return res.status(501).send("User not found");

      return res.status(201).send(user);
    });
  } catch (error) {
    return res.status(404).send({ error: "Cannot Find" });
  }
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
