import CropAnalysis from "../models/cropAnalysis.js";

export const getCropAnalysisByMonth = async (req, res) => {
  const { month } = req.query;
  console.log(month);
  try {
    const crop = await CropAnalysis.find({ month });
    return res.json({ status: 200, crop });
  } catch (err) {
    return res.json({ status: 500, message: "Something went wrong" });
  }
};

export const postCropAnalysis = async (req, res) => {
  console.log(req.body);
  const { month, name, cropData } = req.body;
  try {
    const crop = await CropAnalysis.create({
      month,
      name,
      cropData,
    });
    return res.json({ status: 201, crop });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong", error });
  }
};
