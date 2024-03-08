import Product from "../models/product.model.js";
import Wishlist from "../models/wishList.model.js";

const addProductToWishlist = async (req, res) => {
    const {productId, isLiked} = req.body;
    const userId = req.user._id;


    try {
        const newWishlist = new Wishlist({productId, userId, isLiked});
        await newWishlist.save();
        res.status(201).json({
            success: true,
            message: "Product added to wishlist",
            data: newWishlist

        })
    } catch (error) {
        console.log("Error at addProductToWishlist controller : ", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}