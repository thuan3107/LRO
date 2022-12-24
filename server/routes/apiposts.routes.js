const express = require("express");
const CountViewPost = require("../controllers/Posts/CountView.controller.js");
const CreatePost = require("../controllers/Posts/CreatePost.controller.js");
const PostsList = require("../controllers/Posts/PostList.controller.js");
const LikeOnePost = require("../controllers/Posts/LikeOnePost.controller.js");
const RemovePost = require("../controllers/Posts/RemovePost.controller.js");
const UpdatePost = require("../controllers/Posts/UpdatePost.controller.js");

//! router

const apiPost = express.Router();

apiPost.post("/addpost", CreatePost);
apiPost.post("/deletepost", RemovePost);
apiPost.post("/updatepost", UpdatePost);
apiPost.get("/getpost", PostsList);
apiPost.post("/likepost", LikeOnePost);
apiPost.post("/viewpost", CountViewPost);

module.exports = apiPost;
