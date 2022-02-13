const { request } = require('express');
const Dealer=require('../models/dealer');
const Location=require('../models/location');

const create=function(req,res){

    console.log(req.body);
    if(req.body.password != req.body.confirm_password)
    {   
        return res.send('password not matched');
    }


    Location.findOne({city:req.body.city, state:req.body.state},function(err,loc){
        if(err){
            console.log(err);
            return;
        }
        if(!loc){
            Location.create({city:req.body.city, state:req.body.state},function(err,user){
                if(err){
                    console.error(err);
                    
                }
            })
        }

    })

    Location.findOne({city:req.body.city,state:req.body.state},function(err,loc){

        if(err){
            console.log(err);
            return;
        }

        var deal=new Dealer({
            email:req.body.email,
            password:req.body.password,
            username:req.body.username,
            name:req.body.name,
            phone:req.body.phone,
            natureOfMaterial:req.body.natureOfMaterial,
            weightOfMaterial:req.body.weightOfMaterial,
            quantity:req.body.quantity,
            address:loc.__id,
        });

        console.log(deal.address);
        Dealer.findOne({email: req.body.email},function(err,user){
            if(err){
                console.error(err);
                return;
            }
    
    
    
            if(!user){
                Dealer.create(deal,function(err,user){
                   if(err){
                        console.error(err);
                        return;
                   }
                   console.log(deal.address);
                   console.log(deal.quantity)
                    return res.send('created');
                })
            }
            else
            {   
                return res.send('Already');
            }
        })

    });
    
    
}

module.exports=
{
    create,
}