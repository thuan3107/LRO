// import { validationResult } from "express-validator";
// import { StatusCode, JWT_TOKEN_SECRET } from "../utils/constants.js";
// import { jsonGenerate } from "../utils/helpers.js";
// import bcrypt from "bcrypt";
// import User from "../models/User.js";
// import Jwt from "jsonwebtoken";

const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const { JWT_TOKEN_SECRET, StatusCode } = require("../utils/constants.js");
const { jsonGenerate } = require("../utils/helpers.js");

const Register = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, username, password, email } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const userExist = await User.findOne({
      $or: [
        {
          email: email,
        },
        {
          username: username,
        },
      ],
    });

    if (userExist) {
      return res.json(
        jsonGenerate(
          StatusCode.UNPROCESSABLE_ENTITY,
          "User or Email already exists"
        )
      );
    }
    // save to db
    try {
      const result = await User.create({
        name: name,
        email: email,
        password: hashPassword,
        username: username,
      });

      const token = Jwt.sign({ userId: result._id }, JWT_TOKEN_SECRET);

      res.json(
        jsonGenerate(StatusCode.SUCCESS, "Registration successfull", {
          userId: result._id,
          token: token,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  res.json(
    jsonGenerate(
      StatusCode.VALIDATION_ERROR,
      "Validation error",
      errors.mapped()
    )
  );
};

module.exports = Register;
