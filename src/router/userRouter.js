import express from "express";
import { postCustomer } from "../module/userModule.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const user = await postCustomer(req.body);

    console.log(user?._id);

    if (user?._id) {
      return res.json({
        status: "success",
        message: "your account has been created",
      });
    } else {
      return res.json({
        status: "error",
        message: "Sorry try again later",
      });
    }
  } catch (error) {
    next(error);
  }
});

// product fetching

export default router;
