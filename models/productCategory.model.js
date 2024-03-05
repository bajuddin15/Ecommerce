import mongoose from "mongoose";

const productCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    // icon may be
  },
  { timestamps: true }
);

const ProductCategory = new mongoose.model(
  "ProductCategory",
  productCategorySchema
);
export default ProductCategory;
