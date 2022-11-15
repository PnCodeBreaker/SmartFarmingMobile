import express from "express";
const router = express.Router();

import { getProduct, postProduct } from "../controllers/product.js";

router.get("/getProduct", getProduct);
router.post("/postProduct", postProduct);

export default router;
