import express from "express";

import cors from "cors";

import morgan from "morgan";

const app = express();

// middlewares

app.use(express.json());

app.use(cors());

app.use(morgan());

// local middlewares

const PORT = 8000;

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Your server is live",
  });
});

app.use((error, req, res) => {
  const errorCode = error.errorCode || 500;
  res.status(errorCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log("error")
    : console.log(`your server is running at http://localhost:${PORT}`);
});
