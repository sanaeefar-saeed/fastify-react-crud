// External Dependancies
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: String,
  parentId: Number
});

module.exports = mongoose.model("Category", categorySchema);
