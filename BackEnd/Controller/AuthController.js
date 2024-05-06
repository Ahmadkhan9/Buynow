const catchAsync = require("../Utils/catchAsync")
const jwt = require('jsonwebtoken')
const AppError = require('./../Utils/AppError')
const User = require('../Models/UserModel')
const signToken = id => {
    return jwt.sign({id} , process.env.JWT_SECRET_KEY, {
        expiresIn : process.env.JWT_EXPIRE_IN
    })
}
exports.signUp = catchAsync(async (req,res,next) => {
    const {email , name , password, confirmPassword} = req.body
    const user = await User.create({
        name,
        email,
        password,
        confirmPassword
    })
    const token = signToken(user._id)
    res.status(200).json({
        token,
        status : 'success',
        user
    })
})
exports.logIn = catchAsync( async(req,res,next)=> {
    const {email , password} = req.body
    if(!email || !password){
        return next(new AppError('please enter email and password',404))
    }
    const user = await User.findOne({email}).select('+password')
    if(!user){
        return next(new AppError('no user found with this id',404))
    }
    if(!await user.comparePassword(password, user.password)){
        return next(new AppError('please login with valid credentials',400))
    }
    user.password = undefined
    const token = signToken(user._id)
    res.status(200).json({
        token,
        user
    })
})

exports.getUsers = catchAsync(async (req,res,next)=>{
    const users = await User.find()
    res.status(200).json({
        users
    })
})