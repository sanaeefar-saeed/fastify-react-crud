// External Dependancies
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: String,
  parentId: String,
  image: String,
  isActive: Boolean
});

module.exports = mongoose.model("Category", categorySchema);
