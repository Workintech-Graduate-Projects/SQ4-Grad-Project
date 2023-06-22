const mongoose = require("mongoose");

const constumerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  ganoIsOverThree: {
    type: Boolean,
    required: true,
  },
  firstWorkEnterDate: {
    type: Number,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  creditType: {
    type: String,
    required: true,
  },
  isOkay: {
    type: Boolean,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  creditScore: {
    type: Number,
    required: true,
  },
  preference: {
    type: Number,
    required: true,
  },
  tf_id: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Constumers", constumerSchema);
