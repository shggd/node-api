const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    shoppingCart:[
        {
            _id:{
                type: mongoose.Schema.Types.ObjectId, 
                ref:'Product'
            },
            name:String,
            count:{type:Number, default: 1}
        }
    ],
    totalItem:Number,
    totalPrice:Number,
    orderNumber:Number,

});


module.exports = mongoose.model("Cart",CartSchema);