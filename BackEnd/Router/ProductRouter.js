const express = require('express')
const router = express.Router()
const ProductController = require('./../Controller/ProductController')
router.route('/upload-product').post(ProductController.uploadPhoto , ProductController.createProduct)
router.route('/get-products').get(ProductController.getProduct)




module.exports = router