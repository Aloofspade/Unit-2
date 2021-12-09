const Shoe = require('../models/Shoes')

const createShoes = async (req, res) => {
    const shoe = await Shoe.create(req.body)
    res.status(200).json({shoe})
}

const getAllShoes  =  async (req, res) => {
    const shoes = await Shoe.find({})
    res.status(200).json({shoes})
}
module.exports = {
    createShoes,
    getAllShoes
}