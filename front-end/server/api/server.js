const express = require("express");
const axios = require("axios");
const server = express();
var cors = require("cors");
const pdRouter = require("./pipe_drive/pd-router");

require("dotenv").config();

const { PORT } = require("../config/config");

server.use(express.json());

server.use(cors());

server.get("/typeformfetch", async (req, res, next) => {
  try {
    const token =
      "tfp_GpcNwiuKqyGiMYx1VBSMj6y6d53Cto8ntYMCfUPGDRtj_3mJ7TMJumgtQaS";
    const id = "DZe5EzXI";
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `https://api.typeform.com/forms/${id}/responses`,
      {
        headers,
      }
    );

    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

server.get("/", (req, res) => {
  res.send(`<p>Server is running on port ${PORT}</p>`);
});

server.use("/users", pdRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "server error",
  });
});

module.exports = server;
