const express = require("express");
var app = express();
const path = require("path")
var path1 = path.join(__dirname,"public");

app.use(express.static(path1))
app.listen(8080)

