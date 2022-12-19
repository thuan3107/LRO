require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./db");
const cors = require("cors");
const AuthMiddleware = require("./middlewares/AuthMidleware.js");
const apiRoute = require("./routes/api.js");
const apiProtected = require("./routes/apidocs.routes.js");
const docRoutes = require("./routes/docs.routes.js");
// Database Connection
connection();
// dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/", apiRoute);
app.use("/get/", docRoutes);
app.use("/api/", AuthMiddleware, apiProtected);

app.get("/", (req, res) => {
  res.send("Server Todo List Run");
});
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
