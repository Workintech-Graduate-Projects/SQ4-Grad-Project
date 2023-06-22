const router = require("express").Router();
const Constumer = require("./mongoDb-model");
const mw = require("./mongoDb-middleware");
// Getting all
router.get("/", async (req, res) => {
  try {
    const constumers = await Constumer.find();
    res.json(constumers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", mw.getConstumer, (req, res) => {
  res.json(res.subscriber);
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

// // Deleting One
router.delete("/:id", mw.getConstumer, async (req, res) => {
  try {
    await res.constumer.remove();
    res.json({ message: "Deleted Subscriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
