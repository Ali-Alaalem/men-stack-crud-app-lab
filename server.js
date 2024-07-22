// ================== Variables ======================
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const methodOverride = require("method-override");
require("./config/database");
const cars = require("./models/cars.js");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // new
const carCtl = require("./controllers/carCtl.js");
const path = require("path");

// ================== Functions ======================
app.use(express.static(path.join(__dirname, "public")));
app.get("/", carCtl.home);
app.get("/cars", carCtl.index);
app.get("/cars/new", carCtl.New);
app.post("/cars", carCtl.create);
app.get("/cars/:carId", carCtl.show);
app.post("/cars/:carId", carCtl.deleteCar);
app.get("/cars/:carId/edit", carCtl.edit);
app.put("/cars/:carId", carCtl.update);
// ================== Server ======================
app.listen(3000, () => {
  console.log("The express app is ready!");
});
