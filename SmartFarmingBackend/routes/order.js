import express from "express";
import {
  getOrderByUserId,
  postOrderByUserId,
  updateOrderStatusById,
} from "../controllers/order.js";
const router = express.Router();

router.get("/getOrderByUserId/:userId", getOrderByUserId);
router.post("/postOrderByUserId", postOrderByUserId);
router.patch("/updateOrderStatusById", updateOrderStatusById);

export default router;
