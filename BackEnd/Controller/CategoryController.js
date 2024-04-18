const AppError = require('../Utils/AppError')
const catchAsync = require('../Utils/catchAsync')
const Category = require('./../Models/CategoryModel')
exports.getAllCategories = catchAsync(async (req, res, next)=> {
    const categories = await Category.find().populate('products')
    const categoryObject = {}
    categories.map(item => {
        categoryObject[item.name] = item
    })
    res.status(200).json({
        status : 'success',
        categories : categoryObject
    })
})
exports.createCategory = catchAsync(async (req , res, next)=>{
    const {name , products} = req.body
    if(!name){
        return next(new AppError('please enter name of the category',400))
    }
    const category = await Category.create({name , products}).populate('products')
    res.status(200).json({
        status : 'success',
        category
    })
})
exports.getSingleCategory = catchAsync(async (req, res, next)=>{
    const {id} = req.params
    if(!id){
        return next(new AppError('please send id as a param in url',400))
    }
    const category = await Category.findById(id)
    if(!category){
        return next(new AppError('No category found with this Id!!',404))
    }
    res.status(200).json({
        status : 'success',
        category
    })
})