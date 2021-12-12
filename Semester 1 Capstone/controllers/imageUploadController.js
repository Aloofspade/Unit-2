
const path = require('path')
const fs = require('fs')

const cloudinary = require('cloudinary').v2;

const olduploadImage = async (req, res) => {
    const shoeImage = req.files.image;

const imagePath = path.join(
    __dirname, '../public/uploads/' + `${shoeImage.name}`
);
await shoeImage.mv(imagePath)

res.status(200).json({image: {src: `/uploads/${shoeImage.name}`}})




    res.send("uploadImage")
}

const uploadImage = async (req, res) => {
    const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        {
            use_filename: true,
            folder: "file-capstone"
        }
    );

    fs.unlinkSync(req.files.image.tempFilePath)

    res.status(200).json({image: {src: result.secure_url}})
}

module.exports = {uploadImage}