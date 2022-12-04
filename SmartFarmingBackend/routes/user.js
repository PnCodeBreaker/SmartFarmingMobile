import express from "express";
const router = express.Router();

import {
  getUserData,
  signin,
  signup,
  updateUserData,
} from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/getUserData/:userId", getUserData);
router.patch("/updateUserData", updateUserData);

export default router;
