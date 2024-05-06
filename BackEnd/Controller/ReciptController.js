const catchAsync = require("../Utils/catchAsync");
const Recipt = require('./../Models/ReciptsModel')
exports.createRecipt = catchAsync(async (req,res,next)=>{
    const recipt = await Recipt.create({
        user : req.body.user,
        totalAmount : req.body.totalAmount,
        products : req.body.products
    })
    res.status(200).json({
        recipt
    })
})