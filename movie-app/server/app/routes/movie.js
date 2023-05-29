const express = require("express");
const MovieController = require("../controllers/movie");
const router = express.Router();
const checkLogin = require("../middleware/auth");
module.exports = () => {
  router.get("/", checkLogin, MovieController.getAllMovies);
  router.post("/", MovieController.addMovie);
  router.get("/:id", MovieController.getOneMovie);
  router.put("/:id", MovieController.updateMovie);
  router.delete("/:id", MovieController.deleteMovie);
  return router;
};
