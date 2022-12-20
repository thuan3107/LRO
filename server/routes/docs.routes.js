const docRoutes = require("express").Router();
const FindOneDoc = require("../controllers/FindOneDoc.controller.js");
const Doc = require("../models/docs.models.js");
const User = require("../models/User.js");

// Get all songs
docRoutes.get("/alldocs", async (req, res) => {
  try {
    const dataDocs = await Doc.find();
    res.status(200).send({ data: dataDocs });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
docRoutes.post("/findonedocs", FindOneDoc);
docRoutes.get("/alluser", async (req, res) => {
  try {
    const dataDocs = await User.find();
    res.status(200).send({ data: dataDocs });
    // res.send({ data: dataDocs });
  } catch (error) {
    res.status(503).send({ message: "Internal Server Error" });
  }
});

module.exports = docRoutes;
