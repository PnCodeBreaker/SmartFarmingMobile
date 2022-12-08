import mongoose from "mongoose";

const cropAnalysisSchema = mongoose.Schema({
  month: { type: String, required: true },
  name: { type: String, required: true },
  cropData: { type: [Number], required: true },
});

export default mongoose.model("CropAnalysis", cropAnalysisSchema);
