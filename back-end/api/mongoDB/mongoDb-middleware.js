async function getConstumer(req, res, next) {
  let constumer;
  try {
    constumer = await Constumer.findById(req.params.id);
    if (constumer == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.constumer = constumer;
  next();
}

module.exports = { getConstumer };
