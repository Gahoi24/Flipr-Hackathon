import express from "express";
import morgan from "morgan"
import {json,urlencoded} from "body-parser";
import cors from "cors";

const app=express()
const port=5000
const router=express.Router();

app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Hello world");
});
app.listen(port,async()=>{
    console.log("Server started at Port " + port);
})
