// import mongoose from "mongoose";
const mongoose = require("mongoose");

var today = new Date();
var day =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const userSchema = mongoose.Schema({
  form: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  // fullname:{ type:String , default : last_name +" " first_name},
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
  phone: {
    type: String,
  },
  avatar: {
    type: String,
    required: true,
  },
  access: {
    type: String,
    default: "user",
  },
  isSex: { type: String, required: true },
  docs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "docs",
    },
  ],
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "articles",
    },
  ],
  date: {
    type: String,
    default: day,
  },
});

// module.exports = mongoose.model("user", userSchema);
const User = mongoose.model("User", userSchema);
module.exports = User;
