const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'please enter name of the product'],
        trim : true
    },
    photo : {
        type : String,
        required : [true , 'please select photo of the product']
    },
    price : {
        type : Number,
        required : [true , 'please enter price of the product']
    }
})


const Product = mongoose.model('Product' , productSchema)

module.exports = Product