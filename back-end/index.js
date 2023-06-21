const server = require("./api/server");
const { PORT } = require("./config/config");

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

// const apiTokenTF =
//   "Bearer tfp_6nBCysUtmZ398NH7pF1SKo13ZBtgiMJFzp6HpAzVCbxs_3sv2Az29YYAE67";
// const apiTokenPD = "7cdde3ef51b593595e2b58a9ad867ea8d027172d";

// const tfURL = "https://api.typeform.com/forms/DZe5EzXI/responses";
// const pdURL =
//   "https://api.pipedrive.com/v1/leads?api_token=7cdde3ef51b593595e2b58a9ad867ea8d027172d";

// const getData = async () =>
//   getData().then((res) => {
//     console.log(res);
//   });
// server.listen("3000", () => {
//   console.log("Server is running on PORT 3000");
// });
