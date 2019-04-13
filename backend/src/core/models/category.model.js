// External Dependencies
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: String,
  parentId: String,
  isVisible: Boolean,
  image: Object
});

module.exports = mongoose.model("Category", categorySchema);
