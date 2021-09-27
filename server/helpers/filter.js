function filterData(product) {
    const { _id, name, price, description, category, image } = product;
    return { id: _id, name, price, description, category, image };
}

module.exports = filterData
