const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");
module.exports = () => {
  router.post("/login", AuthController.login);
  router.post("/register", AuthController.register);
  return router;
};
