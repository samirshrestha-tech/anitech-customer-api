import express from "express";
import axios from "axios";

const router = express.Router();
router.get("/", async (req, res, next) => {
  try {
    const { data } = await axios.get("http://localhost:8000/api/v1/products");

    console.log(data);
    res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
