const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();
module.exports = () => {
  router.get("/users", UserController.getAllUsers);
  router.post("/users", UserController.createUser);
  router.get("/users/:id", UserController.getOneUser);
  router.put("/users/:id", UserController.updateOneUser);
  router.delete("/users/:id", UserController.deleteUser);
  return router;
};
