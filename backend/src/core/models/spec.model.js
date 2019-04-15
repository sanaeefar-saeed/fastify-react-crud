// External Dependencies
const mongoose = require("mongoose");

const specSchema = new mongoose.Schema({
  specName: String,
  specValue: String,
  isVisible: Boolean,
  image: Object
});

module.exports = mongoose.model("Spec", specSchema);
