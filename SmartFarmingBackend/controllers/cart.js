import CartModel from "../models/cart.js";

export const getCartByUserId = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  try {
    const cart = await CartModel.find({ user: userId }).populate("product");
    res.json({ status: 200, cart });
  } catch (err) {
    res.json({ status: 500, message: "Something went wrong" });
  }
};

export const postCartByUserId = async (req, res) => {
  console.log(req.body);
  const { user, product, selectedQuantity } = req.body;
  try {
    const cart = await CartModel.create({
      user,
      product,
      selectedQuantity,
    });
    return res.json({ status: 201, cart });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong", error });
  }
};

export const updateQuantityById = async (req, res) => {
  console.log(req.body);
  const { id, selectedQuantity } = req.body;
  try {
    const cartItem = await CartModel.findOneAndUpdate(
      { _id: id },
      { selectedQuantity }
    );
    return res.json({ status: 201, cartItem });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong", error });
  }
};

export const deleteCartByProductId = async (req, res) => {
  console.log(req.params);
  const { productId } = req.params;

  try {
    await CartModel.deleteOne({ product: productId });
    return res.json({ status: 201, message: "Successfully deleted" });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong", error });
  }
};

export const deleteCartById = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    await CartModel.deleteOne({ _id: id });
    return res.json({ status: 201, message: "Successfully deleted" });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong", error });
  }
};

export const deleteCartByUserId = async (req, res) => {
  console.log(req.params);
  const { userId } = req.params;

  try {
    await CartModel.deleteMany({ user: userId });
    return res.json({
      status: 201,
      message: "Successfully deleted entire cart",
    });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong", error });
  }
};
