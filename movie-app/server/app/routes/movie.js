const express = require("express");
const MovieController = require("../controllers/movie");
const router = express.Router();

module.exports = () => {
  router.get("/", MovieController.getAllMovies);
  router.post("/", MovieController.addMovie);
  router.get("/:id", MovieController.getOneMovie);
  router.put("/:id", MovieController.updateMovie);
  router.delete("/:id", MovieController.deleteMovie);
  return router;
};
