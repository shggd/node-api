
const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const Product = require('../models/product')
//Url param
// router.param('ordernumber',(req,res,next,num)=>{
//     Cart.findOne({"orderNumber":num})
//         .then(data=>{
//             console.log(data);
//             if(!data){res.status(404).json("Order doesn't exist");}
//             req.orderInfo = data;
//             return next();
//         }).catch(next);
// });

router.get('/order/:ordernumber',(req,res)=>{
    return res.status(200).json(req.orderInfo);
})

router.get('/order',(req,res)=>{    
    if(req.query.ordernumber && req.query.ordernumber.length==10)
    {
        Cart.findOne({"orderNumber":req.query.ordernumber})
            .then(data=>{
                if(!data){return res.status(404).json({success:false,message:"order not found"})}       
                return res.status(200).json({success:true,data})
            })
            .catch(err=> res.json(err))
    }
    else{
        return res.status(404).json({success:false,message:"order not found"})
    }
})

router.post('/order',(req,res)=>{
    // setTimeout(()=>{
        if(req.body.cart.totalItem>=1){
            const newOrder = new Cart({
               totalItem: req.body.cart.totalItem,
               totalPrice: req.body.cart.totalPrice
           });

           req.body.cart.shoppingCart.map(ele=>{
               let item =ele.product;
               item.count = ele.count;
               newOrder.shoppingCart.push(item);
           });
           newOrder.orderNumber=Math.floor(Math.random()*1000000000+1000000000);
           newOrder.save((err,order)=>{
               if(err){return res.status(500).json(err)}
               else{
                    return res.status(200).json({success:true, order:order});
               }
           });
           
       }
    // },3000)

   
});

module.exports = router;
