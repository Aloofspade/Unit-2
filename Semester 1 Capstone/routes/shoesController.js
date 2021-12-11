const express = require('express')
const { uploadImage } = require('../controllers/imageUploadController')
const { createShoe, getAllShoes } = require('../controllers/shoesController')
const router = express.Router()

router.route("/").get(getAllShoes).post(createShoe)
router.route("/uploads").post(uploadImage)

module.exports = router