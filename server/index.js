require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./db");
const cors = require("cors");
const AuthMiddleware = require("./middlewares/AuthMidleware.js");
const apiRoute = require("./routes/api.js");
const docsRoutes = require("./routes/apidocs.routes.js");
const getRoutes = require("./routes/get.routes.js");
const postsRoutes = require("./routes/apiposts.routes.js");
// Database Connection
connection();
// dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/", apiRoute);
app.use("/get/", getRoutes);
app.use("/post/", AuthMiddleware, postsRoutes);
app.use("/docs/", AuthMiddleware, docsRoutes);

app.get("/", (req, res) => {
  res.send("Server Todo List Run");
});
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
