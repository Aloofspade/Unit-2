const express = require('express')
const { uploadImage } = require('../controllers/imageUploadController')
const { createProduct, getAllProducts } = require('../controllers/productscontroller')
const router = express.Router()

router.route("/").get(getAllProducts).post(createProduct)
router.route("/uploads").post(uploadImage)

module.exports = router