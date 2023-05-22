const express=require('express')
const app=express();


app.get('/', (req,res)=>{
    res.end("Hello world by express");
});

app.listen(8000,()=>{
    console.log("running at port 8000");
})