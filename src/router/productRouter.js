import express from "express";
import axios from "axios";

const router = express.Router();
router.get("/", async (req, res, next) => {
  try {
    const products = await axios.get("http://localhost:8000/api/v1/products");

    console.log(products.data);
    res.json({
      message: "Here are teh products",
      data: products.data,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
