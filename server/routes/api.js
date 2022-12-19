const express = require("express");
const CreateDoc = require("../controllers/CreateDoc.controller.js");
const DocsList = require("../controllers/DocsList.controller.js");
const Login = require("../controllers/Login.controller.js");
const Register = require("../controllers/Register.controller.js");
const RemoveDoc = require("../controllers/RemoveDoc.controller.js");
const { LoginSchema } = require("../validatonSchema/LoginSchema.js");
const { RegisterSchema } = require("../validatonSchema/RegisterSchema.js");

//! router
const apiRoute = express.Router();
// const apiProtected = express.Router();

//* acc
apiRoute.post("/register", RegisterSchema, Register);
apiRoute.post("/login", LoginSchema, Login);

// //* docs
// apiProtected.post("/adddoc", CreateDoc);
// apiProtected.post("/deletedoc", RemoveDoc);
// apiProtected.get("/getdoc", DocsList);

module.exports = apiRoute;
// module.exports = apiProtected;

/*
// protected routes;
apiProtected.post(
  "/createTodo",
  [check("desc", "Todo desc is required").exists()],
  createTodo
);
apiProtected.post(
  "/marktodo",
  [check("todo_id", "Todo id  is required").exists()],
  MarkTodo
);
apiProtected.post(
  "/deleteTodo",
  [check("todo_id", "Todo id  is required").exists()],
  RemoveTodo
);
apiProtected.get("/todolist", GetTodos);
*/
