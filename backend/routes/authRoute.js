const express = require("express");
const authRoute = express.Router();
const validate = require("../utils/validate");

authRoute.post("/auth",(req,res)=>{
   try{
     validate(req);
     res.status(200).send("user logged in successfully");
   }
   catch(error)
   {
    res.status(400).send(error);
   }
})

module.exports = authRoute;