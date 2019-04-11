// External Dependancies
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: String,
  parentId: Number,
  image: String,
  isActive: Boolean
});

module.exports = mongoose.model("Category", categorySchema);
