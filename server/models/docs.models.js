const mongoose = require("mongoose");
var d = new Date(),
  dformat =
    [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
    " " +
    [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
const DOCSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  dataURL: {
    type: String,
    required: true,
  },
  nameTag: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  creater: {
    type: String,
  },

  date: {
    type: String,
    default: d,
  },
});

const Docs = mongoose.model("docs", DOCSchema);
module.exports = Docs;