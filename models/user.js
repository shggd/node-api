const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email:{ type:String, unique : true, require: true },
    username:{ type:String, unique : true, require:true},
    password:{ type:String, require:true}
});



const User = module.exports = mongoose.model('User',UserSchema);
