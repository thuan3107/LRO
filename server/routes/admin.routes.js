const express = require("express");

const A = require("../controllers/admin.controller.js");
const Auth = require("../controllers/auth.controller.js");
const Docs = require("../controllers/docs.controller.js");

const admin = express.Router();
// apiDocs.post("/createdoc", Doc.CreateDoc);

//Create Blogs
admin.get("/st", A.ChartLineDoc);
admin.get("/statisticsusers", A.StatisticsUsers);
admin.get("/statisticsdocs", A.StatisticsDocs);
admin.get("/statisticsarts", A.StatisticsArts);
admin.post("/deletedoc", A.DeleteDoc);
admin.post("/deleteart", A.DeleteArt);
admin.post("/deleteuser", A.DeleteUser);

module.exports = admin;
