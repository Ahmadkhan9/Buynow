const mongoose = require('mongoose')

const reciptSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    totalAmount: {
        type : Number,
        required : [true , 'please  enter total Amount']
    },
    products : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'Product'
        }
    ],
    OrderStatus : {
        type : String,
        enum : ['processing' , 'shipping' , 'deilvered' , 'canceled'],
        default : 'processing'
    },
    purchasedOn: {
        type :Date
    }
})

const Recipt = mongoose.model('Recipt' , reciptSchema)

module.exports = Recipt