const docRoutes = require("express").Router();
const { StatusCode } = require("../utils/constants.js");
const { jsonGenerate } = require("../utils/helpers.js");
const Doc = require("../models/docs.models.js");
const User = require("../models/User.js");
const P = require("../controllers/posts.controller.js");
const D = require("../controllers/docs.controller.js");
const Auth = require("../controllers/auth.controller.js");

// Get all songs
docRoutes.get("/alldocs", async (req, res) => {
  try {
    const dataDocs = await Doc.find();
    res.status(200).send({ data: dataDocs });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
docRoutes.get("/userhight", async (req, res) => {
  try {
    const SIZE = req.query.S;
    const list = await User.find().select("-password").exec();

    const arr = list.sort(function (a, b) {
      if (a.posts.length + a.docs.length > b.posts.length + b.docs.length)
        return -1;
      return 1;
    });
    const data = arr.slice(0, SIZE);
    if (data) {
      return res.json(
        jsonGenerate(StatusCode.SUCCESS, "Succssfully", {
          data,
          // LenPosts,
        })
      );
    } else {
      return res.json(
        jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY, "Something went wrong")
      );
    }

    // res.send({ data: dataDocs });
  } catch (error) {
    res.status(503).send({ message: "Internal Server Error" });
  }
});
docRoutes.get("/allpost", P.GetAllPostList);

docRoutes.post("/findonedocs", D.FindOneDoc);
docRoutes.post("/findonepost", P.FindOnePost);

//get pagination doc
docRoutes.get("/pagedoc", D.PaginationDoc);
docRoutes.get("/pagepost", P.PaginationPost);

docRoutes.get("/dochight", D.GetAllDOC_Highlight_Article);
docRoutes.get("/posthight", P.GetAllPOST_Highlight_Article);

docRoutes.get("/viewuser", Auth.FindOneUser);
docRoutes.get("/viewdoclist", D.ViewDocsList);
module.exports = docRoutes;
