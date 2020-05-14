const mongoose = require("./mongo-init");
var express = require("express");
var app = express();

const Schema = __mongoose.Schema;
const ANY = new Schema({}, { strict: false, versionKey: false });
const saludoModel = mongoose.model(ruta, ANY);
app.get("/", function (req, res) {
  res.send("Estás en el root");
});
app.get("/saludo", function (req, res) {
  saludoModel.find({}).limit(1).sort();
});
app.post("/saludo", function (req, res) {
  res.send("Estás en el root");
});

app.listen(3000, function () {
  console.log("Servidor listo en el puerto 3000");
});
