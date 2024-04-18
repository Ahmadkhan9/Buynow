const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'please enter user name']
    },
    email : {
        type :String,
        unique :true,
        required : [true , 'please enter email addresss'],
        validate : [validator.isEmail , 'please enter correct email']
    },
    password : {
        type : String,
        select : false,
        minLength : [5 , 'please enter atleast 6 digits'],
        required : [true , 'please enter your password']
    },
    confirmPassword : {
        type : String,
        required : [true , 'please enter confirm password'],
        validate : {
            validator : function(val){
                return val === this.password
            },
            message : 'please enter same password in both password and confirmPassword'
        }
    }
})
userSchema.pre('save' , async function(next){
    if(!this.isModified('password')) return next()
    this.password =  await bcrypt.hash(this.password , 12)
    this.confirmPassword = undefined
    next()
})

userSchema.methods.comparePassword = async function(password , userpassword){
        return await bcrypt.compare(password , userpassword)
}

const User = mongoose.model('User' , userSchema)

module.exports = User