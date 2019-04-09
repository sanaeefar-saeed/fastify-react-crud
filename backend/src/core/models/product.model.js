// External Dependancies
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ProductId: Number,
  productName: String,
  brand: String,
  price: String,
  services: {
    type: Map,
    of: String
  }
});

module.exports = mongoose.model("Product", productSchema);
