import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
//protected route token base

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send({
      success: false,
      err,
      message: "Error in admin middleware",
    });
  }
};
//admin access

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "User is not Authorized",
      });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
