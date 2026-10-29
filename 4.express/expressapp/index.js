const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("Request",req.url)
    next();
})

 app.get("/",(req,res)=>{
    res.status(200).send("hello express app")
 })


app.post("/",(req,res)=>{
   res.status(200).send("hello express app , This ie post method ! ")
})

app.use((req,res,next)=>{
    res.status(404).send(" Page not found ")
})


app.listen(5000,()=>{
    console.log("server running on port 5000")
})