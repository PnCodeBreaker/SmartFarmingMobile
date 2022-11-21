import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  selectedQuantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Cart", cartSchema);
