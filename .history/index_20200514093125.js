const mongoose = require("./mongo-init");
var express = require("express");
var app = express();

const Schema = __mongoose.Schema;
const ANY = new Schema(
  {
    texto: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { strict: false, versionKey: false }
);
const saludoModel = mongoose.model(ruta, ANY);
app.get("/", function (req, res) {
  res.send("Estás en el root");
});
app.get("/saludo", function (req, res) {
  saludoModel.find({}).limit(1).sort({ createdAt: "desc" });
});
app.post("/saludo", function (req, res) {
  saludoModel.
});

app.listen(3000, function () {
  console.log("Servidor listo en el puerto 3000");
});
