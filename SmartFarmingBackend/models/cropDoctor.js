import mongoose from "mongoose";

const cropDoctorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  language: {
    type: [String],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
});

export default mongoose.model("CropDoctor", cropDoctorSchema);
