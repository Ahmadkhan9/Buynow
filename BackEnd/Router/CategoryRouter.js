const express = require('express')
const router = express.Router({mergeParams : true})
const CategoryController = require('./../Controller/CategoryController')
router.route('/create-category').post(CategoryController.createCategory)
router.route('/get-all-categories').get(CategoryController.getAllCategories)
router.route('/category/:id').get(CategoryController.getSingleCategory)







module.exports = router