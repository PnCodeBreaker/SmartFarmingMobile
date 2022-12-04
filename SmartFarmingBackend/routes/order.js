import express from "express";
import {
  getLatestOrderByUserId,
  getOrderByUserId,
  postOrderByUserId,
  updateOrderStatusById,
} from "../controllers/order.js";
const router = express.Router();

router.get("/getOrderByUserId/:userId", getOrderByUserId);
router.get("/getLatestOrderByUserId/:userId", getLatestOrderByUserId);
router.post("/postOrderByUserId", postOrderByUserId);
router.patch("/updateOrderStatusById", updateOrderStatusById);

export default router;
