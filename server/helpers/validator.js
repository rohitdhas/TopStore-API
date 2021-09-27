function validateRequestBody(req, res, next) {
    try {
        // check for required fields
        // check for unneccesary fields
        // check for empty fields
        // check for field types

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = validateRequestBody;
