const express = require('express');
const router = express.Router();
const Doge = require('../models/doge');
const Comment = require('../models/comment');
const User = require('../models/user');

router.param('dogeid',(req,res,next,dog)=>{
    Doge.findById(dog)
        .then(data=>{
            if(!data){
                res.status(404);
            }; 
                req.doge =data;
                return next();
        }).catch(next);
        
});

//test ROUTE
// router.get('/setdoge/set',(req,res,next)=>{
//         let doge = new Doge({
//         name: 'CAT 3',
//         image:'images/3.jpg',
//         description: 'Since cats were venerated in ancient Egypt, they were commonly believed to have been domesticated there,[12] but there may have been instances of domestication as early as the Neolithic from around 9,500 years ago (7,500 BC).[13] A genetic study in 2007[14] concluded that domestic cats are descended from Near Eastern wildcats, having diverged around 8,000 BC in the Middle East.[12][15] A 2016 study found that leopard cats were undergoing domestication independently in China around 5,500 BC, though this line of partially domesticated cats leaves no trace in the domesticated populations of today.[16][17] A 2017 study confirmed that all domestic cats are descendants of those first domesticated by farmers in the Near East around 9,000 years ago',
//     });
//     doge.save();
//     res.json('DONE')
// });


// return all 
router.get('/',(req,res)=>{
    Doge.find({}).exec()
        .then(AllDoge=>res.json(AllDoge))
        .catch(err=>res.json({success:false, msg:'Not Found'}));
});

//return a single
router.get('/:dogeid', (req,res)=>{
    Comment.find({"post._id":req.doge._id}).exec()
        .then(comment=>res.json({info:req.doge,comment:comment}))
        .catch(err=>res.json({error:err}));
});


module.exports = router;
