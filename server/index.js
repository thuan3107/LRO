require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./db");
const cors = require("cors");
const docRoutes = require("./routes/docs.routes.js");
// import {AuthMiddleware} from('./middlewares/AuthMidleware.js');
const apiRoute = require("./routes/api.js");
const AuthMiddleware = require("./middlewares/AuthMidleware.js");
// Database Connection
connection();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/docs", docRoutes);
app.use("/api/", apiRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
