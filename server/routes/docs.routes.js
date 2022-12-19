const docRoutes = require("express").Router();
const Doc = require("../models/docs.models.js");

// Get all songs
docRoutes.get("/alldocs", async (req, res) => {
  try {
    const dataDocs = await Doc.find();
    res.status(200).send({ data: dataDocs });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = docRoutes;
