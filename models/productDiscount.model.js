import mongoose from "mongoose";

const productDiscountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    discountPercent: {
      type: Number,
      min: 0,
      max: 100,
      default: 0, // Default discount percentage is 0
    },
    active: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ProductDiscount = mongoose.model(
  "ProductDiscount",
  productDiscountSchema
);
export default ProductDiscount;
