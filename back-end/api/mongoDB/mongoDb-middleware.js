async function getConstumer(req, res, next) {
  try {
    let constumer;
    constumer = await Constumer.findById(req.params.id);
    if (constumer == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    } else {
      res.constumer = constumer;
      next();
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = { getConstumer };
