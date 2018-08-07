const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema({
    email:{ type:String, unique : true, require: true },
    username:{ type:String, unique : true, require:true},
    password:{ type:String, require:true}//hash
});


UserSchema.methods.checkPassword = function(password, callback){
    bcrypt.compare(password,this.password)
        .then(match=>callback(match))
        .catch(err=>callback(err));
}

UserSchema.methods.signToken = function(){
    const token = jwt.sign({_id:this._id,email:this.email,username:this.username},'secret',{ algorithm: 'HS256' },{expiresIn:'10h'});
    return token;
}

UserSchema.methods.getUser = function(){
    return {
        id:this._id,
        email:this.email,
        username:this.username
    }
}


module.exports = mongoose.model('User',UserSchema);

