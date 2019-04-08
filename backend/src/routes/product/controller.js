// External Dependancies
const boom = require('boom')

// Get Data Models
const Product = require('../../core/models/product.model')

// Get all products
exports.getProducts = async (req, reply) => {
  try {
    const products = await Product.find()
    return products
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single product by ID
exports.getSingleProduct = async (req, reply) => {
  try {
    const id = req.params.id
    const product = await Product.findById(id)
    return product
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new product
exports.addProduct = async (req, reply) => {
  try {
    const product = new Product(req.body)
    return product.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing product
exports.updateProduct = async (req, reply) => {
  try {
    const id = req.params.id
    const product = req.body
    const { ...updateData } = product
    const update = await Product.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a product
exports.deleteProduct = async (req, reply) => {
  try {
    const id = req.params.id
    const product = await Product.findByIdAndRemove(id)
    return product
  } catch (err) {
    throw boom.boomify(err)
  }
}
