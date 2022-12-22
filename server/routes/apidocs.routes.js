const express = require("express");
const CountViewDoc = require("../controllers/Docs/CountViewDoc.controller.js");
const CreateDoc = require("../controllers/Docs/CreateDoc.controller.js");
const DocsList = require("../controllers/Docs/DocsList.controller.js");
const LikeOneDoc = require("../controllers/Docs/LikeOneDoc.controller.js");
const RemoveDoc = require("../controllers/Docs/RemoveDoc.controller.js");

//! router

const apiProtected = express.Router();

// //* docs
apiProtected.post("/adddoc", CreateDoc);
apiProtected.post("/deletedoc", RemoveDoc);
apiProtected.get("/getdoc", DocsList);
apiProtected.post("/likedoc", LikeOneDoc);
apiProtected.post("/viewdoc", CountViewDoc);
module.exports = apiProtected;
