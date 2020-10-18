const express = require("express");
const path = require("path");
require("./routes/htmlRoutes")
require("./routes/apiRoutes")

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });