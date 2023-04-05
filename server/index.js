require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

const AuthMiddleware = require("./middlewares/AuthMidleware.js");
const apiRoute = require("./routes/api.js");

const docsRoutes = require("./routes/apidocs.routes.js");
const artRoutes = require("./routes/apiArt.routes.js");
const authRoutes = require("./routes/apiAuth.routes.js");

const admin = require("./routes/admin.routes.js");
const user = require("./routes/user.routes.js");

// Database Connection
connection();
// dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use("/admin/", admin);
app.use("/user/", AuthMiddleware, user);
//Router login and register
app.use("/api/", apiRoute);
//router handler for user model
app.use("/apiauth/", AuthMiddleware, authRoutes);
//router handler for articles model
app.use("/apiart/", AuthMiddleware, artRoutes);
//router handler for docs model
app.use("/apidocs/", AuthMiddleware, docsRoutes);

//Server runing

const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`\x1b[46m
  *******************************************************
  ******************** SERVER RUNING ********************
  **********************\x1b[42m PORT ${PORT} \x1b[46m**********************
  *******************************************************
  `)
  // console.log(``)
);

app.get("/", (req, res) => {
  res.send(`
 <iframe height="100%" width="100%" frameborder="0" src="https://www.thinhne.tk/" />  `);
});
