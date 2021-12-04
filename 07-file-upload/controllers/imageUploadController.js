const path = require('path')

const fs = require('fs')


const uploadImage = async (req, res) => {
    const productImage = req.files.image;

const imagePath = path.join(
    __dirname, '../public/uploads' + `${productImage.name}`
);
await productImage.mv(imagePath)

res.status(200).json({image: {src: `/uploads/${productImage.name}`}})




    res.send("uploadImage")
}

module.exports = {uploadImage}