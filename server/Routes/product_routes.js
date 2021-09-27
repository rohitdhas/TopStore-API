const express = require('express');
const router = express.Router();
const { getAll, getOne, getCategories, getByCategory, postOne, deleteOne } = require('../controller/product_controller');

// Get all products
router.get('/', getAll)

// Get categories
router.get('/categories', getCategories)

// Get by category
router.get('/category/:category', getByCategory)

// Get one product
router.get('/:id', getOne)

// Post a Product
router.post('/', postOne)

// Delete a Product
router.delete('/:id', deleteOne);

module.exports = router;