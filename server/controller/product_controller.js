const Product = require('../database/Schema/productSchema');
const filterData = require('../helpers/filter');
const { PRODUCT_CATEGORIES } = require('../staticData');

const getAll = async (req, res) => {
    let filteredData = [];
    let products;
    try {
        products = await Product.find({}).limit(Number(req.query.limit || 0))

        // Filtering Unnecessary Data
        products.forEach(item => {
            filteredData.push(filterData(item))
        })
        return res.status(201).json({ data: filteredData })

    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

const getCategories = (req, res) => {
    return res.status(201).send(PRODUCT_CATEGORIES);
}

const getByCategory = async (req, res) => {
    const category = req.params.category;
    let filteredData = [];
    let products;
    try {
        if (PRODUCT_CATEGORIES.includes(category)) {
            products = await Product.find({ category }).limit(Number(req.query.limit || 0))

            // Filtering Unnecessary Data
            products.forEach(item => {
                filteredData.push(filterData(item))
            })
            return res.status(201).json({ data: filteredData })
        } else {
            return res.status(404).json({ message: "Invalid Category!" })
        }

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const getOne = async (req, res) => {
    let product;
    const id = req.params.id;
    try {
        product = await Product.findOne({ 'api_id': id });
        if (product == null) {
            return res.status(404).json({ message: `Cannot Find Product with id: ${id}!` });
        } else {
            return res.status(201).json({ data: filterData(product) })
        }

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const postOne = (req, res) => {
    res.status(201).json({ message: "Product Created!", data: filterData(req.product) })
}

const updateOne = async (req, res) => {
    const id = req.params.id;
    let product;
    try {
        product = await Product.findOne({ "api_id": id });
        if (product === null) {
            return res.status(404).json({ message: "Invalid Product Id!" })
        } else {
            return res.status(201).json({ message: "Product Updated", data: filterData(req.body) })
        }

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const patchField = async (req, res) => {
    let product;
    const id = req.params.id;
    const keys = Object.keys(req.body);

    try {
        product = await Product.findOne({ "api_id": id });
        if (product === null) {
            return res.status(404).json({ message: "Invalid Product Id!" })
        } else {
            // Patching data to given fields
            keys.forEach(key => {
                product[key] = req.body[key];
            })
            return res.status(201).json({ message: "Product Updated", data: filterData(product) })
        }

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const deleteOne = async (req, res) => {
    const id = req.params.id;
    let product;
    try {
        product = await Product.findOne({ "api_id": id });

        if (product === null) {
            return res.status(400).json({ message: `ERR- Provided invalid id: ${id}!` })
        } else {
            res.status(201).json({ message: "Product Deleted!", data: filterData(product) })
        }

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { getAll, getOne, getCategories, getByCategory, postOne, deleteOne, updateOne, patchField };