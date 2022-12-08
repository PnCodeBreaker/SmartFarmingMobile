import express from "express";
import {
  getCropAnalysisByMonth,
  postCropAnalysis,
} from "../controllers/cropAnalysis.js";

const router = express.Router();

router.get("/getCropAnalysisByMonth", getCropAnalysisByMonth);
router.post("/postCropAnalysis", postCropAnalysis);

export default router;
