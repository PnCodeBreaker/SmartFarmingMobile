import express from "express";
const router = express.Router();

import { getUserData, signin, signup } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/getUserData/:userId", getUserData);

export default router;
