const catchAsync = require('./../Utils/catchAsync')
const Product = require('./../Models/ProductModel')
const AppError = require('../Utils/AppError')
const multer = require('multer')
const multerStorage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'public/images/products')
    },
    filename : (req, file, cb)=> {
        cb(null , `${file.originalname}`)
    }
})
const multerFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')){
        cb(null , true)
    }else{
        cb(new AppError('Not a image, please select image file',400),false)
    }
}
const upload = multer({
    storage : multerStorage,
    fileFilter : multerFilter
})
exports.uploadPhoto = upload.single('photo')
exports.createProduct = catchAsync(async (req,res,next)=>{
    const {name , price , category} = req.body
    if(!name || !price){
        return next(new AppError('please upload all relevent data regarding product',400))
    }
    const product = await Product.create({
        name,
        price,
        photo : req.file.filename,
        category,
    })
    res.status(200).json({
        status  : "success",
        product
    })
})

exports.getProduct = catchAsync(async (req , res, next)=> {
    const products = await Product.find().populate('category')
    res.status(200).json({
        status : 'success',
        products
    })
})