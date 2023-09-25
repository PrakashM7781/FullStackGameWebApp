import mongoose, { Schema } from "mongoose";

export const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please provide unique username"],
    unique: [true, "username exists"],
  },
  name: {
    type: String,
    require: true,
    unique: false,
  },
  password: {
    type: String,
    require: [true, "Password required"],
    unique: false,
  },
  cpassword: {
    type: String,
    require: true,
    unique: false,
  },
  email: {
    type: String,
    require: [true, "Enter email"],
    unique: [true, "Email exists"],
  },
  name: {
    type: String,
  },
});

export default mongoose.model.Users || mongoose.model("User", UsersSchema);
