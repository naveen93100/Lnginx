import express from "express";

const app = express();

app.get("/api", (req, res) => {
  return res.status(200).json({ success: true, message: "Nginx is working" });
});

app.listen(1009, () => {
  console.log("Server is running on port:", 1009);
});
