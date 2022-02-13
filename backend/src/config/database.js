const express = require('express');
// const { render } = require('express/lib/response');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Dealer=require('./models/dealers')
const Driver=require('./models/drivers')
const Location=require('./models/location')
const Route=require('./models/route')
const app=express();

const dbURI='mongodb+srv://kittu:<qwertyuiop>@fliprapp.gzlpc.mongodb.net/Fliprapp?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>app.listen(300))
.catch((err)=>console.log(err)); 