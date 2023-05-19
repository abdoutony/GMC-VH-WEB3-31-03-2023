const express = require("express");
const router = express.Router();
const movieRoutes = require("./movie");
module.exports = () => {
  router.use("/movies", movieRoutes());
  return router;
};
