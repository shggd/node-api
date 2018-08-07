const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
   author : {
               _id:{
                  type: mongoose.Schema.Types.ObjectId, 
                  ref: "User"
                  },
               username:String
               
            },
   post: {
        _id:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Doge"
        },
        name:String
   } ,     
   comment : String,
   date: { type: Date, default: Date.now },
   editdate: { type:Date, default:null},
   rating:{type:Number, default:null }
});

module.exports = mongoose.model("Comment", CommentSchema);