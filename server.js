import express from "express";

const app = express();

const PORT = 8000;

app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "your server is live",
  });
});

app.listen(PORT, () => {
  console.log(`your server is running at http://localhost:${PORT}`);
});
