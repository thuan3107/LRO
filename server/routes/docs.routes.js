const router = require("express").Router();
const Doc = require("../models/docs.models");

// Create song
router.post("/adddoc", async (req, res) => {
  try {
    const dataDoc = await Doc(req.body).save();
    res
      .status(201)
      .send({ data: dataDoc, message: "Doc created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Get all songs
router.get("/getdocs", async (req, res) => {
  try {
    const dataDocs = await Doc.find();
    res.status(200).send({ data: dataDocs });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
