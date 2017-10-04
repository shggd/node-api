const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Comments = require('../models/comment')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register',function(req,res,next){
    let NewUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password,10)
    });

    User.findOne({email: req.body.email},function(err,found){
        if(err){ return res.status(500).json({error:err})}

        if(found){ return res.status(500).json({error: 'Email already exist'}) }
        else{
            User.findOne({username: req.body.username},function(err,foundUser){
            if(err){ return res.status(500).json({error:err})}
            
            if(foundUser){ return res.status(500).json({error:'User already exist'})}
            else{
                NewUser.save(function(err,result){
                if(err){
                    return res.status(500).json({
                        title:'Fail to create new user',
                        error: 'Error has occur'
                    });
                }
                const token = signToken(result);
                res.json({
                    id:result.id,
                    token: token
                });
            });
            }
            });
        }
    });
});

router.post('/signin',function(req,res,next){
    User.findOne({username:req.body.username},function(err,user){
        if(err){
            return res.json({
                title:'Error',
                error: err
             });
            }
         if(!user){
            return res.status(401).json({
                success: false,
                error:'Username or Password Wrong'
            });
        }
        else{
            bcrypt.compare(req.body.password, user.password,function(err,match){
                if(err){
                    return res.json({
                    title:'Error',
                    error: err
                    });
                }
                if(match == false){
                    return res.status(401).json({
                    success: false,
                    error:'Password Wrong'
                    });
                }
                else{
                    const token = signToken(user);
                    res.status(200).json({
                    sucess:true,
                    token: token,
                    user:{
                        id:user.id,
                        email:user.email,
                        username:user.username
                    }
                    });
                }
            });
        }
    });

});

router.post('/checkUsername',function(req,res,next){
   User.findOne({username:req.body.username},function(err,found){
        if(err){ 
            return res.json({
               title:'Page not found',
               error:err     
         })
        } 
        if(!found){
            return res.status(200).json(null);
        }
        else{
            res.status(406).json({'invaild':true});     
        }    

   });
});


router.get('/:id',function(req,res,next){
    let id = req.params.id;
    User.findOne({username:id},function(err,user){
        if(err){
            return res.json({
               title:'Page not found',
               error:err     
            });
        }
        if(!user){
            return res.status(404).json({
                message:'NOT FOUND'
            });
        }
        else{
            Comments.find({"author.username":user.username}).populate("comments").exec(function(err,foundcomments){
                if(err)
                    {
                        return res.status(500).json({err});
                    }
                else
                    {
                        res.json({
                            userinfo: user,
                            usercommon: foundcomments
                        })

                    }

            });

        }

    });

});


function signToken(user){
    const token = jwt.sign({user:user},'secret',{ algorithm: 'HS256' },{expiresIn:'10h'});
    return token;
}


module.exports = router;
