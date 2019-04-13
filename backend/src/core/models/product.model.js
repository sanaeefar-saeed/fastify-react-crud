// External Dependencies
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  categoryId: String,
  title: String,
  count: String,
  cond: String,
  price: String,
  parseDate: String,
  description: String,
  curier: String,
  guarantee: String,
  url: String,
  dt: String,
  managerId: String,
  status: String,
  ctype: String,
  primeCategory: String,
  storeId: String,
  primeCatName: String
});

module.exports = mongoose.model("Product", productSchema);
