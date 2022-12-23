const docRoutes = require("express").Router();
const FindOneDoc = require("../controllers/Docs/FindOneDoc.controller.js");
const FindOnePost = require("../controllers/Posts/FindOnePost.controller.js");
const LikeOneDoc = require("../controllers/Docs/LikeOneDoc.controller.js");
const Doc = require("../models/docs.models.js");
const User = require("../models/User.js");
const GetAllPostList = require("../controllers/Posts/GetAllPost.ctroller.js");

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
docRoutes.get("/allpost", GetAllPostList);
docRoutes.post("/findonepost", FindOnePost);

docRoutes.get("/alluser", async (req, res) => {
  try {
    const dataDocs = await User.find().select("-password").exec();
    res.status(200).send({ data: dataDocs });
    // res.send({ data: dataDocs });
  } catch (error) {
    res.status(503).send({ message: "Internal Server Error" });
  }
});

module.exports = docRoutes;
