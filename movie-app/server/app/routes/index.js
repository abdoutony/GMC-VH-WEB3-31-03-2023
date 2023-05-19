const express = require("express");
const router = express.Router();
const movieRoutes = require("./movie");
const userRoutes = require("./users");
const reviewRoutes = require("./review");
module.exports = () => {
  router.use("/movies", movieRoutes());
  router.use("/users", userRoutes());
  router.use("/review", reviewRoutes());
  return router;
};
