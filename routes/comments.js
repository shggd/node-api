const express = require('express');
const router = express.Router();
const Doge = require('../models/doge');
const Comment = require('../models/comment');
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');



router.post('/doge/:id/comment',expressjwt({secret: 'secret',credentialsRequired: true}) ,function(req,res)
{
    if(!req.body.comment){ return res.status(500).json({'message':'EMPTY BODY'}); }
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)){
        Doge.findById(req.params.id,function(err,foundDoge){
            if(err){ 
                res.status(500).json(err);
                   }
            if(!foundDoge){ 
                 res.status(404).json({error:'doge not found'});  
                 }
            else{
                const newComment = new Comment({
                author: req.user.user,
                comment: req.body.comment,

                 });
                 newComment.post._id = foundDoge._id;
                 newComment.post.title = foundDoge.name;
                 newComment.save(function(err, savedComment){
                    res.json({'message':"success"});
                        });
                      }   
                });
            }
            else
            {
               res.status(404).json({error:'Page not found'}); 
            }    
});

router.put('/doge/edit', expressjwt({secret: 'secret', credentialsRequired:true}), function(req,res){
    if(!req.body.comment){ return res.status(500).json({'message':'EMPTY BODY'}); }
    if (req.body.id.match(/^[0-9a-fA-F]{24}$/)){
        Comment.findById(req.body.id,function(err,foundComment){
            if(err){
                res.status(500).json({error:err});
            }
            if(!foundComment){
                res.status(404).json({error:'comment dont exist'});
            }
            else{
                if(foundComment.author._id == req.user.user._id)
                    {
                        
                        foundComment.comment = req.body.comment.comment;
                        foundComment.editdate = Date.now();
                        foundComment.save();
                        res.status(200).json({ sucess:true, obj:foundComment});
                    }
                else{
                    return res.status(401).json({'message':' you do not have permission'});
                }    
            }

        })
    }
    else{
        return res.status(404).json({error:'Page not found'});
    }
});

router.delete('/doge/delete/:id', expressjwt({secret:'secret', credentialsRequired:true}), function(req,res){
{
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)){
        Comment.findById(req.params.id,function(err,thecomment){
            if(thecomment.author._id==req.user.user._id){
                Comment.findByIdAndRemove(req.params.id,function(err,success){
                    if(err)throw err;
                    else
                        {
                            res.status(200).json({success:true});
                        }
                                        
                })
            }
        })

    }   
    else{
         return res.status(404).json({error:'Comment not found'});

    } 
}

});



module.exports = router;
