import express from "express";
import {
  OrderStatusController,
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  registerController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);

router.post("/forgot-password", forgotPasswordController);

// test routes

router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth for user

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected route for admin

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//user profile

router.put("/profile", requireSignIn, updateProfileController);
//orders

router.get("/orders", requireSignIn, getOrdersController);
//all orders

router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
// orders status update

router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  OrderStatusController
);

export default router;
