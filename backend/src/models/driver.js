const mongoose=require("mongoose");

const Route= require("./route");

const driverSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    truckNumber:{
        type:String,
        required:true,
        unique:true
    },
    truckCapacity:{
        type:Number,
        required:true,
    },
    transporterName:{
        type:String,
        required:true,
    },
    drivingExperience:{
        type:Number,
        required:true,
    },
    interestedRoutes:{
        type:[{type: mongoose.Schema.Types.ObjectId, ref: 'Route'}],
    }
    
},{timestamps:true});

const Driver=mongoose.model('Driver',driverSchema);

module.exports=Driver;
