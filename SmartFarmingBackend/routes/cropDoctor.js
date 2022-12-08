import express from "express";
import {
  getCropDoctorByLanguage,
  postCropDoctor,
} from "../controllers/cropDoctor.js";
const router = express.Router();

router.get("/getCropDoctorByLanguage", getCropDoctorByLanguage);
router.post("/postCropDoctor", postCropDoctor);

export default router;
