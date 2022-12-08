import OrderModel from "../models/order.js";
import CartModel from "../models/cart.js";

export const getOrderByUserId = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  try {
    const order = await OrderModel.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "cart",
        populate: "product",
      });
    res.json({ status: 200, order });
  } catch (err) {
    res.json({ status: 500, message: "Something went wrong", err });
  }
};

export const getLatestOrderByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const order = await OrderModel.findOne({ user: userId })
      .sort({
        createdAt: -1,
      })
      .populate({
        path: "cart",
        populate: "product",
      });
    return res.json({ status: 200, order });
  } catch (error) {
    res.json({ status: 500, message: "Something went wrong", error });
  }
};

export const postOrderByUserId = async (req, res) => {
  console.log(req.body);
  const { user, totalAmount, orderAddress, orderStatus } = req.body;
  try {
    const cart = await CartModel.find({ user });
    console.log(cart);
    const cartData = cart.map((item) => ({
      product: item.product,
      selectedQuantity: item.selectedQuantity,
    }));
    console.log("cartData", cartData);
    const order = await OrderModel.create({
      user,
      cart: cartData,
      orderAddress,
      totalAmount,
      orderStatus,
    });
    if (order) {
      await CartModel.deleteMany({ user });
    }
    return res.json({ status: 201, order });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong", error });
  }
};

export const updateOrderStatusById = async (req, res) => {
  console.log(req.body);
  const { id, orderStatus } = req.body;
  try {
    const orderItem = await OrderModel.findOneAndUpdate(
      { _id: id },
      { orderStatus }
    );
    return res.json({ status: 201, orderItem });
  } catch (error) {
    return res.json({ status: 500, message: "Something went wrong", error });
  }
};

// export const deleteCartByProductId = async (req, res) => {
//   console.log(req.params);
//   const { productId } = req.params;

//   try {
//     await CartModel.deleteOne({ product: productId });
//     return res.json({ status: 201, message: "Successfully deleted" });
//   } catch (error) {
//     return res.json({ status: 500, message: "Something went wrong", error });
//   }
// };

// export const deleteCartById = async (req, res) => {
//   console.log(req.params);
//   const { id } = req.params;
//   try {
//     await CartModel.deleteOne({ _id: id });
//     return res.json({ status: 201, message: "Successfully deleted" });
//   } catch (error) {
//     return res.json({ status: 500, message: "Something went wrong", error });
//   }
// };

// export const deleteCartByUserId = async (req, res) => {
//   console.log(req.params);
//   const { userId } = req.params;

//   try {
//     await CartModel.deleteMany({ user: userId });
//     return res.json({
//       status: 201,
//       message: "Successfully deleted entire cart",
//     });
//   } catch (error) {
//     return res.json({ status: 500, message: "Something went wrong", error });
//   }
// };
