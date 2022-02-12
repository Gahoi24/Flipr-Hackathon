const mongoose=require("mongoose");

const Location=require("./location");


const routeSchema = new mongoose.Schema({
    from:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Location',
        required:true,
    },
    to:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Location',
        required:true,
    }
},{timestamps:true});

const Route=mongoose.model('Route',routeSchema);

module.exports=Route;