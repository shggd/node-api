const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Comments = require('../models/comment')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.param('id',(req,res,next,user)=>{
    User.findOne({username:user})
        .then(data=>{
            if(!data){
                res.status(404).json("no user exist");
            }; 
                req.userinfo= data;
                return next();
        }).catch(next);
        
});

router.post('/register', (req,res)=>{
    if(!req.body.email||!req.body.username||!req.body.password){
        return res.status(422).json({error : "Can't be blank"});
    }
    Promise.all([
        User.findOne({username:req.body.username}).exec(),
        User.findOne({email:req.body.email}).exec()
        ]).then(result=>{
            if(result[0]){ return res.status(500).json({error: 'Username already exist'}) }
            if(result[1]){ return res.status(500).json({error: 'Email already exist'}) }
            const NewUser = new User({
                email: req.body.email,
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password,10)
            });
            NewUser.save((err,result)=>{
                res.json({
                    id:result.id,
                    token:result.signToken()
                })
            })
        }).catch(err=>res.json({error:err}));   
});

router.post('/signin',(req,res)=>{
    if(!req.body.username||!req.body.password){
        return res.status(422).json({error : "Can't be blank"});
    }
    User.findOne({username:req.body.username})
        .then(user=>{
            if(!user){ return res.status(401).json({sucess:false, error:'Username or Password Wrong'}) }
            user.checkPassword(req.body.password,(match)=>{
                if(!match){ res.status(401).json({sucess:false, error:'Username or Password Wrong'}) }
                else{
                    res.status(200).json({
                        success:true,
                        token:user.signToken(),
                        user:user.getUser()
                    })
                }
            })
        }).catch(err=>res.json(err));
});

router.post('/checkUsername',function(req,res,next){
    User.findOne({username:req.body.username})
        .then(found=>{
            if(!found){
                return res.status(200).json(null);
            }
            res.status(406).json({'invaild':true});    
        })
});

router.get('/:id',(req,res,next)=>{
    Comments.find({"author._id":req.userinfo._id})
        .then(comment=>res.json(comment))
        .catch(err=>res.json(err));
})

module.exports = router;
