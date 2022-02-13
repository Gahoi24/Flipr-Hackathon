import express from "express";
import morgan from "morgan"
import {json,urlencoded} from "body-parser";
import cors from "cors";
import router from "./src/routes";

const app=express();
const port=5000;
const connect=require('./src/config/database');

app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended:true}));

app.use('/',router);
app.listen(port,async()=>{
    await connect();
    console.log("Server started at Port " + port);
})
