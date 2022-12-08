import express, { urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/order.js";
import cropDoctorRoutes from "./routes/cropDoctor.js";
import cropAnalysisRoutes from "./routes/cropAnalysis.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);
app.use("/cropDoctor", cropDoctorRoutes);
app.use("/cropAnalysis", cropAnalysisRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to SmartFarming");
});

const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
