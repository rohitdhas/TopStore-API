function filterData(product) {
    const { api_id, name, price, description, category, image } = product;
    return { id: api_id, name, price, description, category, image };
}

module.exports = filterData
