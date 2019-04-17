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
  images: Object,
  video: Object,
  weight: String,
  guarantee: String,
  return: String,
  brand: String,
  visibility: Boolean,
  specifications: Array
});

module.exports = mongoose.model("Product", productSchema);