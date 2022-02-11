const express=require('express')
const morgan=require('morgan')

const app=express()
const port=5000

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.listen(port,async()=>{
    console.log("Server started at Port " + port);
})