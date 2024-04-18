const mongoose = require('mongoose')


const CategorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'please enter name of the category'],
        trim : true
    },
    products : [
        {
        type : mongoose.Schema.ObjectId,
        ref : 'Product'
    }
]
})

const Category = mongoose.model('Category' , CategorySchema)

module.exports = Category