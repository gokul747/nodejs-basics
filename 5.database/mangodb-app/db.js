const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/userdb")
.then(()=>{
    console.log("database connected succesfully");
})
.catch((err)=>{
    console.log("database connection failed",err)
})