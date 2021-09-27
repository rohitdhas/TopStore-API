const { PRODUCT_CATEGORIES } = require('../staticData');

function validateRequestBody(req, res, next) {
    const requiredFields = [{ name: 'name', type: 'string' }, { name: 'price', type: 'number' }, { name: 'description', type: 'string' }, { name: 'category', type: 'string' }, { name: 'image', type: 'string' }];
    const requestBodyFields = Object.keys(req.body);
    let isOk = true;

    requiredFields.forEach(field => {
        // check for required fields
        if (!requestBodyFields.includes(field.name)) {
            isOk = false
            return res.status(400).json({ message: `ERR - ${field.name} field is required!` })
        }
        // check for empty fields
        if (!req.body[field.name]) {
            isOk = false
            return res.status(400).json({ message: `ERR - ${field.name} field cannot be empty!` })
        }
        // check for field types
        if (typeof req.body[field.name] !== field.type) {
            isOk = false
            return res.status(400).json({ message: `TypeErr - ${field.name} field should be of ${field.type} type!` })
        }
    })

    // Category Check
    if (!PRODUCT_CATEGORIES.includes(req.body.category) && isOk) {
        isOk = false;
        return res.status(400).json({ message: `ERR - ${req.body.category} is not a valid category!` })
    }

    if (isOk) {
        const { name, price, description, category, image } = req.body;
        req.product = { id: req.params.id || 61, name, price, description, category, image };
        next()
    }
}

module.exports = validateRequestBody;
