// External Dependancies
const boom = require("boom");

// Get Data Models
const Category = require("../../core/models/category.model");

// Get all categories
exports.getCategories = async (req, reply) => {
  try {
    const Categories = await Category.find();
    return Categories;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single category by ID
exports.getSingleCategory = async (req, reply) => {
  try {
    const id = req.params.id;
    const category = await Category.findById(id);
    return category;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new category
exports.addCategory = async (req, reply) => {
  try {
    const category = new Category(req.body);
    return category.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing category
exports.updateCategory = async (req, reply) => {
  try {
    const id = req.params.id;
    const category = req.body;
    const { ...updateData } = category;
    const update = await Category.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a category
exports.deleteCategory = async (req, reply) => {
  try {
    const id = req.params.id;
    const category = await Category.findByIdAndRemove(id);
    return category;
  } catch (err) {
    throw boom.boomify(err);
  }
};
