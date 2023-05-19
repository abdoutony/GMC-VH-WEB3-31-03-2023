const express = require("express");
require("dotenv").config();
require("./config/db").connect();
const apiRoutes = require("./routes");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT;

//set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes());
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
