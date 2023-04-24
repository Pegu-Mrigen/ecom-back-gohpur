import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  categorywiseProductController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  productSerachController,
  relatedProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();
//create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//get products
router.get(
  "/get-products",

  getProductController
);

//get single product

router.get("/single-product/:slug", getSingleProductController);
//get photo

router.get("/product-photo/:pid", productPhotoController);
//delete product

router.delete("/productDelete/:pid", deleteProductController);
//update product

router.put(
  "/update-product/:pid",
  //   requireSignIn,
  //   isAdmin,
  formidable(),
  updateProductController
);

//filter product

router.post("/product-filters", productFiltersController);

//count product

router.get("/product-count", productCountController);
// product per page

router.get("/product-list/:productPage", productListController);
// product search

router.get("/search/:keyword", productSerachController);

//simillar product

router.get("/related-product/:pid/:cid", relatedProductController);
//categorywise product

router.get("/categorywise-product/:slug", categorywiseProductController);
//payment routes
//token

router.get("/braintree/token", braintreeTokenController);
//payment

router.post("/braintree/payment", requireSignIn, braintreePaymentController);

export default router;
