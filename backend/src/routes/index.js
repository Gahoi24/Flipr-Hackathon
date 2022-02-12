const express=require('express');
const homeController=require('../controllers/homeController');
const dealerRouter=require('../models/dealers');
const driverRouter=require('../models/drivers');
const router=express.Router();

console.log('Router up!!!');

router.get('/',homeController.root);
// router.use('/dealers',dealerRouter);
// router.use('/drivers',driverRouter);
module.exports=router;