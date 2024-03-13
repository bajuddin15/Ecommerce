import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
} from "../controllers/product.controller.js";
import { isAdmin, protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

/* Prefix - /api/products */

router.post("/create", protectRoute, isAdmin, createProduct); //baseUrl/api/products/create
router.delete("/:productId", protectRoute, isAdmin, deleteProduct); //baseUrl/api/products/736736373838
router.get("/", getAllProducts); //baseurl/api/products
router.get("/:productId", getSingleProduct); //baseurl/api/products/73673773

export default router;
