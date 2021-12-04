const Product = require('../models/Product')

const createProduct = (req, res) => {
    res.send('createProduct')
}

const getAllProducts  = (req, res) => {
    res.send("getAllProducts")
}
module.exports = {
    createProduct,
    getAllProducts
}