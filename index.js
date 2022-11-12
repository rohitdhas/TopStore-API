// ________________________ IMPORTS ________________________
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const productRoutes = require("./Routes/product_routes");

if (process.env.ENVIRONMENT !== "production") {
  require("dotenv").config();
}

// ________________________ DATABASE CONNECTION ________________________

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 4000, (err) => {
      if (err) console.log(err);
      else console.log("Server is running!");
    });
    console.log("Mongoose Connected!✅");
  })
  .catch(() => console.log("Its error from DB!"));

// ________________________ MIDDLEWARES ________________________

app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/build")));

app.use(
  cors({
    origin: "*",
  })
);

// ________________________ ROUTES ________________________

app.use("/api/products", productRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// ________________________________________________________

module.exports = app;
