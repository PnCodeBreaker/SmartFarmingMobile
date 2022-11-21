import express from "express";
import {
  deleteCartById,
  deleteCartByProductId,
  deleteCartByUserId,
  getCartByUserId,
  postCartByUserId,
} from "../controllers/cart.js";
const router = express.Router();

router.get("/getCartByUserId/:userId", getCartByUserId);
router.post("/postCartByUserId", postCartByUserId);
router.delete("/removeCartByProductId/:productId", deleteCartByProductId);
router.delete("/removeCartById/:id", deleteCartById);
router.delete("/removeCartByUserId/:userId", deleteCartByUserId);

export default router;
