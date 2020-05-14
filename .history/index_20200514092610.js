const mongoose = require("./mongo-init");
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Estás en el root");
});

app.listen(3000, function () {
  console.log("Servidor listo en el puerto 3000");
});
