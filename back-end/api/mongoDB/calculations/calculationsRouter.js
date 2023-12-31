const router = require("express").Router();
const Constumer = require("../mongoDb-model");
const {
  verifySignatureMiddleware,
  arrayToObjMW,
  makeCalculationMW,
  lookForExceptionMW,
  doesTitleAndSectorExistMW,
  constumerExist,
  //calculateMany,
  //lookForExceptionMWMany,
} = require("./calculationsMiddleware");

// calculates data coming from typeForm webhook and save it to Constumer database
router.post(
  "/webhook_calculate",

  arrayToObjMW,
  doesTitleAndSectorExistMW,
  makeCalculationMW,
  lookForExceptionMW,
  async (req, res, next) => {
    try {
      const constumer = new Constumer(req.typeFormObj);
      await constumer.save();
      res.status(200).json({ messege: "Created" });
    } catch (error) {
      next(error);
    }
  }
);

// recalculates data from mongoDb database for changes (sector score,title score,exceptions)
router.put(
  "/:id",
  constumerExist,
  doesTitleAndSectorExistMW,
  makeCalculationMW,
  lookForExceptionMW,

  async (req, res, next) => {
    try {
      const obj = req.typeFormObj;
      console.log("router typeformobj", obj);

      const updatedConstemer = await Constumer.findByIdAndUpdate(
        req.params.id,
        {
          preference: obj.preference,
          creditScore: obj.creditScore,
          exception: obj.exception,
        },
        { returnDocument: "after" }
      );
      console.log(updatedConstemer);
      res.json(updatedConstemer);
    } catch (error) {
      next(error);
    }
  }
);

/*router.post(
  "/insertMany",
  calculateMany,
  lookForExceptionMWMany,
  async (req, res, next) => {
    try {
      let data = req.body.data;

      await Constumer.insertMany(data);
      res.status(200).json({ message: "Succed" });
    } catch (error) {
      next(error);
    }
  }
);
router.delete("/all", async (req, res, next) => {
  try {
    await Constumer.deleteMany({});
    res.status(200).json({ message: "All deleted" });
  } catch (error) {
    next(error);
  }
});*/
module.exports = router;
