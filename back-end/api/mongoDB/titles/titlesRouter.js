const router = require("express").Router();
const Titles = require("./titlesSchema");
// get all titles
router.get("/", async (req, res, next) => {
  try {
    const titles = await Titles.find();
    res.json(titles);
  } catch (error) {
    next(error);
  }
});

// get by id
router.get("/:id", async (req, res, next) => {
  try {
    const title = await Titles.findById(req.params.id);
    res.json(title);
  } catch (error) {
    next(error);
  }
});
// create
router.post("/", async (req, res, next) => {
  try {
    const newTitle = new Titles({
      title: req.body.title,
      score: req.body.score,
    });
    const createdTitle = await newTitle.save();

    res.json(createdTitle);
  } catch (error) {
    next(error);
  }
});
// update by id
router.put("/:id", async (req, res, next) => {
  try {
    if (req.body.title && req.body.score) {
      const updatedTitle = await Titles.findByIdAndUpdate(
        req.params.id,
        { title: req.body.title, score: req.body.score },
        {
          returnDocument: "after",
        }
      );
      res.json(updatedTitle);
    } else if (req.body.title && !req.body.score) {
      const updatedTitle = await Titles.findByIdAndUpdate(
        req.params.id,
        { title: req.body.title },
        {
          returnDocument: "after",
        }
      );
      res.json(updatedTitle);
    } else if (!req.body.title && req.body.score) {
      const updatedTitle = await Titles.findByIdAndUpdate(
        req.params.id,
        { score: req.body.score },
        {
          returnDocument: "after",
        }
      );
      res.json(updatedTitle);
    } else {
      res.json({ message: "Provide with at least one variable" });
    }
  } catch (error) {
    next(error);
  }
});
// get by title name
router.get("/name/:titleName", async (req, res, next) => {
  try {
    const titleFindedByName = await Titles.findOne({
      title: req.params["titleName"],
    });
    res.json(titleFindedByName);
  } catch (error) {
    next(error);
  }
});
// delete by id
router.delete("/:id", async (req, res, next) => {
  try {
    await Titles.findByIdAndDelete(req.params.id);
    res.json({ message: "title deleted" });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
