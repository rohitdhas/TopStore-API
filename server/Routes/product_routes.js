const express = require('express');
const router = express.Router();
const validateRequestBody = require('../helpers/validator');
const { getAll, getOne, getCategories, getByCategory, postOne, deleteOne, updateOne, patchField } = require('../controller/product_controller');

// Get all products
router.get('/', getAll)

// Get categories
router.get('/categories', getCategories)

// Get by category
router.get('/category/:category', getByCategory)

// Get one product
router.get('/:id', getOne)

// Post a Product
router.post('/', validateRequestBody, postOne)

// Update a Product
router.put('/:id', validateRequestBody, updateOne);

// Update Product Fields 
router.patch('/:id', patchField);

// Delete a Product
router.delete('/:id', deleteOne);

module.exports = router;