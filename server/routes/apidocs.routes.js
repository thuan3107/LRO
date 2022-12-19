const express = require("express");
const CreateDoc = require("../controllers/CreateDoc.controller.js");
const DocsList = require("../controllers/DocsList.controller.js");
const RemoveDoc = require("../controllers/RemoveDoc.controller.js");

//! router

const apiProtected = express.Router();

// //* docs
apiProtected.post("/adddoc", CreateDoc);
apiProtected.post("/deletedoc", RemoveDoc);
apiProtected.get("/getdoc", DocsList);

module.exports = apiProtected;
