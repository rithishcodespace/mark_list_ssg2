const express = require("express");
const markRoute = express.Router();
const db = require("../database");

markRoute.post("/updatemarks",(req,res)=>{
    let sql = "insert into marks(english,tamil,maths,physics,chemistry) values (?, ?, ?, ?, ?)";
    values = [req.body.english,req.body.tamil,req.body.maths,req.body.physics,req.body.chemistry];
    db.query(sql,values,(error,result)=>{
        if(error){
            res.status(400).send({message:"Error occured while inserting data into database",error});
        }
        else
        {
            res.send("marks successfully added into db");
        }
    })

})

markRoute.get("/getmarks",(req,res)=>{
    let sql = "select * from marks";
    db.query(sql,(error,result)=>{
        if(error)
        {
            res.status(400).send({"message":"An error occured while fetching the marks from db"});
        }
        else
        {
            res.send(result);
        }
    })
})

module.exports = markRoute;