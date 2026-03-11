import express from "express";

const app = express();

app.get("/", async (req, res) => {
  let data;
  fetch("https://dummyjson.com/products?limit=1000")
    .then((res) => res.json())
    .then((d) => {
      return res.json(d);
    });
});

app.listen(1009, () => {
  console.log("Server is running on port:", 1009);
});
