const express = require('express');
const router = express.Router();
const Doge = require('../models/doge');
const Comment = require('../models/comment');
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');



router.param('id',(req,res,next,doge)=>{
    Doge.findById(doge)
        .then(data=>{
            if(!data){
                res.status(404).json({error:'Page not found'}); 
            }; 
                req.doge =data;
                return next();
        }).catch(next);
        
});

router.param('commentid',(req,res,next,commentid)=>{
    Comment.findById(commentid)
        .then(data=>{
            if(!data){
                res.status(404).json({error:'Comment not found'});
            };
                req.comment = data;
                return next();
        }).catch(next);
});


//new comment
router.post('/doge/:id/comment',expressjwt({secret: 'secret',credentialsRequired: true}) ,(req,res)=>{
    if(!req.body.comment){
         return res.status(500).json({'message':'EMPTY BODY'}); 
    }
    else{
        const newComment = new Comment({
            author: req.user,
            comment: req.body.comment,
        });
        newComment.post = req.doge;
        newComment.save((err, savedComment)=>{
            res.json({message:"success", comment:newComment})
        })

    }
});

//edit a comment
router.put('/doge/edit/:commentid', expressjwt({secret: 'secret', credentialsRequired:true}),(req,res)=>{
    if(!req.body.comment){
         return res.status(500).json({'message':'EMPTY BODY'});
    }
    if(req.comment.author._id.equals(req.user._id)){
        req.comment.comment = req.body.comment.comment;
        req.comment.editdate = Date.now();
        req.comment.save();
        return res.status(200).json({ sucess:true, obj:req.comment});
    }
    else{
        return res.status(401).json({error:'you do not have permission'});
    }
});

//delete a comment
router.delete('/doge/delete/:commentid', expressjwt({secret:'secret', credentialsRequired:true}),(req,res)=>{
    if(req.comment.author._id.equals(req.user._id)){
        Comment.findByIdAndRemove(req.comment._id,(err,deleted)=>{
            res.status(200).json({success:true});
        })
    }
    else{
        return res.status(401).json({error:'you do not have permission'});
    }
});



module.exports = router;





