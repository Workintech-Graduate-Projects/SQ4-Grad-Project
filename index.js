const express = require("express");
const axios = require("axios");
const server = express();

const apiTokenTF =
  "Bearer tfp_6nBCysUtmZ398NH7pF1SKo13ZBtgiMJFzp6HpAzVCbxs_3sv2Az29YYAE67";
const apiTokenPD = "7cdde3ef51b593595e2b58a9ad867ea8d027172d";

const tfURL = "https://api.typeform.com/forms/DZe5EzXI/responses";
const pdURL =
  "https://api.pipedrive.com/v1/leads?api_token=7cdde3ef51b593595e2b58a9ad867ea8d027172d";

server.use(express.json());

const headers = { Authorization: apiTokenTF };
const getData = async () => {
  await axios
    .get(tfURL, { headers })
    .then((res) => {
      let datas = res.data.items.map((i) => {
        return i.answers;
      });
      //console.log(datas);
      return datas;
    })
    .catch((err) => {
      console.log(err);
    });
};

getData().then((res) => {
  res;
});

server.listen("3000", () => {
  console.log("Server is running on PORT 3000");
});
