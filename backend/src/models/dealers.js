const mongoose=require("mongoose");

const Location= require("./location");

const dealerSchema = new mongoose.Schema({
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
    natureOfMaterial:{
        type:String,
        required:true,
    },
    weightOfMaterail:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        requried:true,
    }

    
    
},{timestamps:true});

const Dealer=mongoose.model('Dealer',dealerSchema);

module.exports=Dealer;
