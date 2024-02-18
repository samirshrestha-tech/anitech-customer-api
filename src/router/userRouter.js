import express from "express";
import { postCustomer } from "../module/userModule.js";

let router = express.Router();

router.post("/", async (req, res) => {
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
    console.log(error);
  }
});

export default router;
