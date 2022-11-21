import express from "express";
import {
  deleteCartById,
  deleteCartByUserId,
  getCartByUserId,
  postCartByUserId,
} from "../controllers/cart.js";
const router = express.Router();

router.get("/getCartByUserId/:userId", getCartByUserId);
router.post("/postCartByUserId", postCartByUserId);
router.delete("/removeCartById/:id", deleteCartById);
router.delete("/removeCartByUserId/:userId", deleteCartByUserId);

export default router;
