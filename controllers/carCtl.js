const { application } = require("express");
const Car = require("../models/cars");

const home = async (req, res, next) => {
  res.render("index.ejs");
};

const index = async (req, res, next) => {
  const allCars = await Car.find();
  res.render("cars/index.ejs", { cars: allCars });
};

const New = async (req, res, next) => {
  res.render("cars/new.ejs");
};

const create = async (req, res, next) => {
  await Car.create(req.body);
  res.redirect("/cars");
};

const show = async (req, res, next) => {
  console.log(req.params.carId);
  const car = await Car.findById(req.params.carId);
  res.render("cars/show.ejs", { car });
};

const deleteCar = async (req, res, next) => {
  const car = await Car.findByIdAndDelete(req.params.carId);
  res.redirect("/cars");
};

const update = async (req, res) => {
  await Car.findByIdAndUpdate(req.params.carId, req.body);
  res.redirect(`/cars`);
};

const edit = async (req, res) => {
  const cars = await Car.findById(req.params.carId);
  res.render("cars/edit.ejs", {
    car: cars,
  });
};

module.exports = { home, index, New, create, show, deleteCar, edit, update };
