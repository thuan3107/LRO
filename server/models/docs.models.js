const mongoose = require("mongoose");

const DOCSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dataURL: { type: String, required: true },
  creater: { type: String, required: true },
  // createrID: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("DOCS", DOCSchema);
