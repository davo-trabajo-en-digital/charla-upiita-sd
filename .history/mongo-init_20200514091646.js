"use strict";
const mongoose = require("mongoose");
mongoose.connect("mongodb://db:27017/ted");

module.exports = mongoose;
