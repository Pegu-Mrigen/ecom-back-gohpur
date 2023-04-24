import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//create cat

router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update cat

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
//get all cat

router.get(
  "/all-categories",

  categoryController
);
//get single cat

router.get(
  "/single-category/:slug",

  singleCategoryController
);
//delete cat

router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,

  deleteCategoryController
);

export default router;
