const express = require('express');
const mongoose = require('mongoose');

const dbURI='mongodb+srv://kittu:<qwertyuiop>@fliprapp.gzlpc.mongodb.net/Fliprapp?retryWrites=true&w=majority'

const connect = ()=>{
    console.log("Mongodb connected");
    return mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    //  return mongoose.connect('mongodb://localhost/flipr');
}


module.exports=connect;