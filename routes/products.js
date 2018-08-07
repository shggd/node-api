const express = require('express');
const router = express.Router();
const faker = require('faker');
const Product = require('../models/product');
const request = require('request');



router.param('id',function(req,res,next,pro){
    Product.findById(pro)
        .then(data=>{
            if(!data){
                res.status(404);
            }; 
                req.product =data;
                return next();
        }).catch(next);
        
});


router.get('/', (req,res)=>{
    //default    
    let pageItem = 12;
    let page = 1;
    const sortOption = {
        name_asc:{'name':'asc'},
        name_desc:{'name':'desc'},
        price_asc:{'price':'asc'},
        price_desc:{'price':'desc'},        
    };
    let sort = sortOption.name_asc;

    Product.count({},(err,count)=>{
        const totalPage = pageItem>count? 1:count%pageItem ==0? count/pageItem : Math.trunc(count/pageItem)+1;       
        if(typeof req.query.page!== 'undefined'&& req.query.page>0){
            page = req.query.page<= totalPage? req.query.page : page;
        }

        if(typeof req.query.sort_by!== 'undefined'){
            sort = req.query.sort_by in sortOption?sortOption[req.query.sort_by] : sortOption.name_asc;
        }
        Product.find({}).limit(pageItem).skip((page-1)*pageItem).sort(sort).exec()
            .then(products=>{
                return res.json({
                    products:products,
                    currentPage:Number(page),
                    totalPage:totalPage
                })
            })
            .catch(err=>res.json({error:err}));
    });


}); 


router.get('/test/test',(req,res)=>{
    request('http://dog.ceo/api/breeds/image/random', function (error, response, body) {
       let pic = JSON.parse(body);
       
       const pro = new Product({
        name: faker.commerce.productName(),
        images: pic.message,
        price: faker.commerce.price(),
        description: faker.lorem.paragraph()+ faker.lorem.paragraph(),
        quantity:10
       });

       pro.save();
       res.json(pro);
      });
    
});

router.get('/search',(req,res)=>{
    if(typeof req.query.keyword!=='undefined'){
        const keywords = '\"' + req.query.keyword.split(' ').join('\" \"') + '\"';
        Product.find({$text: {$search:keywords}}).exec()
            .then(result=>res.json(result))
            .catch(error=>res.json(error));
    }
    else{
        res.json("no keyword");
    }
})


router.get('/:id',(req,res)=>{
    Product.findById(req.product)
        .exec()
        .then(product=>res.json(product));
});

router.get('/get/random',(req,res)=>{
    
    Product.findRandom({},{},{limit:4},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })
})



module.exports = router;
