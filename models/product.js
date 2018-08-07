const mongoose = require("mongoose");
const random = require('mongoose-simple-random');

const ProductSchema = new mongoose.Schema({
    name:String,
    images:String,
    price:Number,
    description: String,
    quantity:Number,
});
ProductSchema.plugin(random);
ProductSchema.index({name: 'text'});

module.exports = mongoose.model('Product',ProductSchema);





