import express from "express";
import { editSingleUser, getAllUsers } from "../controllers/user.controller.js";
import { isAdmin, protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

// /api/users
router.get("/", protectRoute, isAdmin, getAllUsers);
router.put("/:userId", protectRoute, editSingleUser);

export default router;
