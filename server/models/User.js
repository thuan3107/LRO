// import mongoose from "mongoose";
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  form: { type: String },
  uid: { type: String },
  username: {
    type: String,
    min: 6,
    // max: 32,
    required: true,
  },
  password: {
    type: String,
    min: 6,
    // max: 32,
    required: true,
  },
  email: {
    type: String,
    min: 6,
    // max: 32,
    required: true,
  },
  photoURL: {
    type: String,
  },
  access: {
    type: String,
    default: "user",
  },
  docs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DOCS",
    },
  ],
  blog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BLOGS",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("USER", userSchema);
