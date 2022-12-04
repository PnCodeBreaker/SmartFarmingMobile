import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModal from "../models/user.js";

dotenv.config();
// const secret = process.env.SECRET;

export const signin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res.json({ status: 404, message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.json({ status: 400, message: "Invalid credentials" });

    res.json({ status: 200, data: oldUser });
  } catch (err) {
    res.json({ status: 500, message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  console.log(req.body);
  const { email, password, name } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser)
      return res.json({ status: 400, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const data = await UserModal.create({
      email,
      password: hashedPassword,
      name,
    });
    return res.json({ status: 201, data });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong" });
  }
};

export const getUserData = async (req, res) => {
  const { userId } = req.params;

  try {
    const data = await UserModal.findOne({ _id: userId }).select("-password");
    console.log(data);
    return res.json({ status: 200, data });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong" });
  }
};

export const updateUserData = async (req, res) => {
  console.log(req.body);
  const { userId, name } = req.body;
  try {
    const user = await UserModal.findOneAndUpdate(
      {
        _id: userId,
      },
      { name }
    );
    return res.json({ status: 201, user });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong", error });
  }
};
