import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

// all rouutes
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

// all routes declarition
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT ?? 5000;

connectDB().then((res) => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT : http://localhost:${PORT}`);
  });
});
