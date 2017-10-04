const express = require('express');
const router = express.Router();
const Doge = require('../models/doge');
const Comment = require('../models/comment');

router.get('/setdoge/set',function(req,res,next){

    //     let doge = new Doge({
    //     name: 'Fat CAT 3',
    //     image:'images/3.jpg',
    //     description: 'Since cats were venerated in ancient Egypt, they were commonly believed to have been domesticated there,[12] but there may have been instances of domestication as early as the Neolithic from around 9,500 years ago (7,500 BC).[13] A genetic study in 2007[14] concluded that domestic cats are descended from Near Eastern wildcats, having diverged around 8,000 BC in the Middle East.[12][15] A 2016 study found that leopard cats were undergoing domestication independently in China around 5,500 BC, though this line of partially domesticated cats leaves no trace in the domesticated populations of today.[16][17] A 2017 study confirmed that all domestic cats are descendants of those first domesticated by farmers in the Near East around 9,000 years ago',
    // });
    // doge.save();
});



router.get('/',function(req,res,next){
    Doge.find({},function(err,AllDoge){
        if(err)
            {
                res.json({success:false, msg:'Not Found'})
            }
        else
            {
                res.json(AllDoge);
            }    
    });

});

router.get('/:id',function(req,res,next){
    let id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        Doge.findById(id).populate("comments").exec(function(err,doge){
            if(err){
                return res.status(404)({err     
                });
            }
            if(!doge){
                return res.status(404).json({
                message:'Doge not Found'    
                });
            }
            else{
                Comment.find({"post._id": id}, function(err,dogecomment){
                    return res.json({
                        info:doge,
                        comment:dogecomment
                    });
                });
            }
        });
    }
    else{
        res.status(404).json({error:'error'});
    }
   
});

module.exports = router;
