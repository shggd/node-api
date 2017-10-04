const mongoose = require("mongoose");

const Doge = new mongoose.Schema({
    name : String,
    image: String,
    description  : String,
    created: {type:Date, default:Date.now},

});

module.exports = mongoose.model("Doge",Doge);