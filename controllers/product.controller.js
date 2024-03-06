import Product from "../models/product.model.js";

const createProduct = async (req, res) => {
  const {
    name,
    description,
    sku,
    price,
    stock,
    thumbnail_url,
    images,
    categoryId,
    discountId,
  } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      sku,
      price,
      stock,
      thumbnail_url,
      images,
      categoryId,
      discountId,
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product create successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log("Error at createProduct controller : ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const findProduct = await Product.findById(productId);

    if (!findProduct) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await Product.findByIdAndDelete(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log("Error at deleteProduct controller : ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      message: "Products found successfully",
      data: products,
    });
  } catch (error) {
    console.log("Error at Products controller : ", error?.message);
    res.status(500).json({ success: false, message: error?.message });
  }
};

const getSingleProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product found successfully",
      data: product,
    });
  } catch (error) {
    console.log("Error at  Get Single controller : ", error?.message);
    res.status(500).json({ success: false, message: error?.message });
  }
};

export { createProduct, deleteProduct, getAllProducts, getSingleProduct };
