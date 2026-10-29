const express = require('express');

const router = express.Router();


const User = require("../models/User")


//user routes - POST api/users
//create user

router.post("/",async(req,res)=>{
    const data = req.body;
    const user = new User(data);
    const saved = await user.save();
    res.status(201).json(saved);
    
})

//get all user - GET api/users:id

router.get("/:id",async (req,res)=>{
   //console.log(req.params.id) 
   const users = await User.findById(req.params.id)
   res.status(201).json(users);
})

//update user PUT api/users:id

router.put("/:id",async (req,res)=>{
  
   const users = await User.findByIdAndUpdate(req.params.id, req.body,{new:true});
   res.status(201).json(users);
})


//delete user DELETE api/user:id


router.delete("/:id",async (req,res)=>{
  
   await User.findByIdAndDelete(req.params.id, req.body,{new:true});
   res.status(204);
})


module.exports = router;