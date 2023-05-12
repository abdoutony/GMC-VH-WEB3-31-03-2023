const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const apiRoutes = require("./routes/index");
require("dotenv").config();
const { checkAuth } = require("./middleware/auth");
//calling the database connection
require("./config/db").connect();
const PORT = process.env.PORT;

// body parser set up
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function sayHello(req, res, next) {
  console.log("Hello world");
  next();
}
app.use(sayHello);

app.get("/hello", checkAuth, (req, res) => {
  res.send("Hello from my first express app");
});

app.get("/", (req, res) => {
  res.send("ROOT ");
});

app.use("/api", apiRoutes());

app.get("*", (req, res) => {
  res.send("bad route");
});
app.listen(PORT, () => console.log("Server started on port " + PORT));
