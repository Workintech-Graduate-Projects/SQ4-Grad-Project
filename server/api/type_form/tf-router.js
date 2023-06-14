const router = require("express").Router();
const axios = require("axios");
const { TYPEFORM_TOKEN } = require("../../config/config");

const tfURL = "https://api.typeform.com/forms/DZe5EzXI/responses";
const headers = {
  Authorization:
    "Bearer tfp_6nBCysUtmZ398NH7pF1SKo13ZBtgiMJFzp6HpAzVCbxs_3sv2Az29YYAE67",
};

router.get("/", async (req, res, next) => {
  try {
    let dataAx = await axios
      .get(tfURL, { headers })
      .then((res) => {
        // let datas = res.data.items.map((i) => {
        //   return i.answers;
        // });
        //console.log(datas);
        console.log(res);

        return res;
      })
      .catch((err) => {
        console.log(err);
      });
    res.status(200).json(dataAx);

    // let array = [{ dsad: "dasdas" }, { fasdasd: "dsasdas" }];
  } catch (error) {
    next(error);
  }
});

module.exports = router;
