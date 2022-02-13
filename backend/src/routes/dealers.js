const express=require('express');
// const passport=require('passport');
const dealerController=require('../controllers/dealerController');
const Drivers=require('../models/driver');

const router=express.Router();

// router.get('/profile',passport.checkAuthentication,userController.profile);
// router.get('/signup',userController.signUp);
// router.get('/reset',userController.reset);   
// router.get('/user_update_info',passport.checkAuthentication,userController.updateInfo);


router.post('/create', dealerController.create);

// router.post('/update',userController.update);
// router.post('/sendOtp',userController.sendOtp);

module.exports=router;
