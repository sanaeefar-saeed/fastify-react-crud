// External Dependencies
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  primeCategoryId: String,
  categoryId: String,
  productName: String,
  price: String,
  onSale: Boolean,
  discount: String,
  salePrice: String,
  description: String,
  image: Object,
  video: Object,
  weight: String,
  guarantee: String,
  return: String,
  brand: String,
  visibility: Boolean
});

module.exports = mongoose.model("Product", productSchema);