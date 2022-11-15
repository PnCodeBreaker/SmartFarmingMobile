import ProductModel from "../models/product.js";

export const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.find({});
    res.json({ status: 200, product });
  } catch (err) {
    res.json({ status: 500, message: "Something went wrong" });
  }
};

export const postProduct = async (req, res) => {
  console.log(req.body);
  const { name, description, image, quantity, price } = req.body;
  try {
    const data = await ProductModel.create({
      name,
      description,
      image,
      quantity,
      price,
    });
    return res.json({ status: 201, data });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong" });
  }
};
