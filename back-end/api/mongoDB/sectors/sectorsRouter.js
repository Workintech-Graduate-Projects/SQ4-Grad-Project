const router = require("express").Router();
const Sectors = require("./sectorsSchema");
// get all sectors
router.get("/", async (req, res, next) => {
  try {
    const sectors = await Sectors.find();
    res.json(sectors);
  } catch (error) {
    next(error);
  }
});

// get by id
router.get("/:id", async (req, res, next) => {
  try {
    const sector = await Sectors.findById(req.params.id);
    res.json(sector);
  } catch (error) {
    next(error);
  }
});
// create
router.post("/", async (req, res, next) => {
  try {
    const newSector = new Sectors({
      sector: req.body.sector,
      score: req.body.score,
    });
    const createdSector = await newSector.save();

    res.json(createdSector);
  } catch (error) {
    next(error);
  }
});
// update by id
router.put("/:id", async (req, res, next) => {
  try {
    if (req.body.sector && req.body.score) {
      const updatedSector = await Sectors.findByIdAndUpdate(
        req.params.id,
        { sector: req.body.sector, score: req.body.score },
        {
          returnDocument: "after",
        }
      );
      res.json(updatedSector);
    } else if (req.body.sector && !req.body.score) {
      const updatedSector = await Sectors.findByIdAndUpdate(
        req.params.id,
        { sector: req.body.sector },
        {
          returnDocument: "after",
        }
      );
      res.json(updatedSector);
    } else if (!req.body.sector && req.body.score) {
      const updatedSector = await Sectors.findByIdAndUpdate(
        req.params.id,
        { score: req.body.score },
        {
          returnDocument: "after",
        }
      );
      res.json(updatedSector);
    } else {
      res.json({ message: "Provide with at least one variable" });
    }
  } catch (error) {
    next(error);
  }
});
// get by sector name
//türkçe karakter içerenlerde çalışmıyor
router.get("/name/:sectorName", async (req, res, next) => {
  try {
    const sectorFindedByName = await Sectors.findOne({
      sector: req.params["sectorName"],
    });
    res.json(sectorFindedByName);
  } catch (error) {
    next(error);
  }
});
// delete by id
router.delete("/:id", async (req, res, next) => {
  try {
    await Sectors.findByIdAndDelete(req.params.id);
    res.json({ message: "sector deleted" });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
