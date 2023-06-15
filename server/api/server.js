const express = require("express");
const server = express();
var cors = require("cors");
const tfRouter = require("./type_form/tf-router");

const { PORT } = require("../config/config");

server.use(express.json());

server.use(cors());

server.get("/", (req, res) => {
  res.send(`<p>Server is running on port ${PORT}</p>`);
});

server.use("/users", tfRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "server error",
  });
});

module.exports = server;
