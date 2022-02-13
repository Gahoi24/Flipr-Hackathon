const { request } = require('express');
const Dealer=require('../models/driver');

const create=function(req,res){

    console.log(req.body);
    if(req.body.password != req.body.confirm_password)
    {   
        return res.send('password not matched');
    }

    Dealer.findOne({email: req.body.email},function(err,user){
        if(err){
            console.error(err);
            return;
        }

        if(!user){
            User.create(req.body,function(err,user){
               if(err){
                    console.error(err);
                    return;
               }
                return res.send('created');
            })
        }
        else
        {   
            return res.send('Already');
        }
    })
}

module.exports=
{
    create,
}