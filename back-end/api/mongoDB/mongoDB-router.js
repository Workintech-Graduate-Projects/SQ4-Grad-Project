const router = require("express").Router();
const Constumer = require("./mongoDb-model");
const mw = require("./mongoDb-middleware");
// Getting all
router.get("/", async (req, res) => {
  try {
    const constumers = await Constumer.find();
    res.json(constumers);
  } catch (err) {
    res.status(500).json({ message: `${err.message} >>> Hata Burada` });
  }
});

// Getting One
router.get("/:id", async (req, res) => {
  try {
    const constumers = await Constumer.findById(req.params.id);
    res.json(constumers);
  } catch (err) {
    res.status(500).json({ message: `${err.message} >>> Hata Burada 2` });
  }
});

// Creating one
router.post("/", async (req, res) => {
  const constumer = new Constumer({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    phone: req.body.phone,
    email: req.body.email,
    university: req.body.university,
    level: req.body.level,
    ganoIsOverThree: req.body.ganoIsOverThree,
    firstWorkEnterDate: req.body.firstWorkEnterDate,
    sector: req.body.sector,
    title: req.body.title,
    experience: req.body.experience,
    salary: req.body.salary,
    creditType: req.body.creditType,
    isOkay: req.body.isOkay,
    source: req.body.source,
    creditScore: req.body.creditScore,
    preference: req.body.preference,
  });
  try {
    const newConstumer = await constumer.save();
    res.status(201).json(newConstumer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
router.put("/:id", async (req, res, next) => {
  try {
    await Constumer.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.json(await Constumer.findById(req.params.id));
  } catch (error) {
    next(error);
  }
});

// // Deleting One
router.delete("/:id", async (req, res) => {
  try {
    const constumers = await Constumer.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Constumer:", constumers });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
