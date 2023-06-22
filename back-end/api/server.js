const express = require("express");
const mongoose = require("mongoose");

const { MongoClient } = require("mongodb");

const axios = require("axios");

const server = express();
var cors = require("cors");
const pdRouter = require("./pipe_drive/pd-router");
const mongoRouter = require("./mongoDB/mongoDB-router");
require("dotenv").config();

const { PORT, mongoString } = require("../config/config");
const titleRouter = require("./mongoDB/titles/titlesRouter");
const sectorRouter = require("./mongoDB/sectors/sectorsRouter");
const exceptionRouter = require("./mongoDB/exceptions/exceptionRouter");

server.use(express.json());

server.use(cors());

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

// async function main() {
//   const client = new MongoClient(mongoString);
//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();
//     // Make the appropriate DB calls
//     await listDatabases(client);
//     await findOneListingByName(client, "WorkinTech");
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

// async function findOneListingByName(client, nameOfListing) {
//   const result = await client
//     .db("deneme")
//     .collection("test")
//     .findOne({ name: nameOfListing });

//   if (result) {
//     console.log(
//       `Found a listing in the collection with the name '${nameOfListing}':`
//     );
//     console.log(result);
//   } else {
//     console.log(`No listings found with the name '${nameOfListing}'`);
//   }
// }

server.use("/mongo", mongoRouter);
// server.get("/typeformfetch", async (req, res, next) => {
//   try {
//     const token =
//       "tfp_GpcNwiuKqyGiMYx1VBSMj6y6d53Cto8ntYMCfUPGDRtj_3mJ7TMJumgtQaS";
//     const id = "DZe5EzXI";
//     const headers = {
//       Authorization: `Bearer ${token}`,
//     };

//     const response = await axios.get(
//       `https://api.typeform.com/forms/${id}/responses`,
//       {
//         headers,
//       }
//     );

//     res.json(response.data);
//   } catch (error) {
//     next(error);
//   }
// });

server.use("/titles", titleRouter);
server.use("/sectors", sectorRouter);
server.use("/exceptions", exceptionRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Server is running on port ${PORT} </h1>`);
});

server.use("/users", pdRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "server error",
  });
});

module.exports = server;
