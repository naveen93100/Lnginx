import express from "express";

const app = express();

app.get("/", (req, res) => {
   res.send("Nginx is working");
});

app.listen(1009, () => {
  console.log("Server is running on port:", 1009);
});
