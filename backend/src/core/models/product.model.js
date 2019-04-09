// External Dependencies
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: Number,
  productName: String,
  brand: String,
  price: String,
  services: {
    type: Map,
    of: String
  }
});

module.exports = mongoose.model("Product", productSchema);
