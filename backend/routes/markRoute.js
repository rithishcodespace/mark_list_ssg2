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

markRoute.patch("/editmarks/:id",(req,res)=>{
    
    let id = req.params.id;
    let sql = `update marks set english=?,tamil=?,maths=?,physics=?,chemistry=? where student_id = ${id}`;
    values = [req.body.english,req.body.tamil,req.body.maths,req.body.physics,req.body.chemistry];
    db.query(sql,values,(error,result)=>{
        if(error)
        {
            res.status(404).send({message:"There is an error in updating student marks",error})
        }
        else
        {
            res.send({message:"marks updated successfully"});
        }
    })
})

markRoute.delete("/deletemarks/:id",(req,res)=>{
    let sql = "delete from marks where student_id = ?";
    values = [req.params.id];
    db.query(sql,values,(error,result)=>{
      if(error)
      {
        res.status(404).send({"errorMessage":error});
      }
      else
      {
        res.send({"successmessage":"marks deleted successfully!"});
      }
    })
})

markRoute.get("/getmarksbyid/:id",(req,res)=>{
    let id = req.params.id
    let sql = "select student_id,english,tamil,maths,physics,chemistry from marks where student_id = ?";
    values = [id]
    db.query(sql,values,(error,result)=>{
       if(error)
       {
        res.status(404).send({"errorMessage":"You got an error while getting marks by id"});
       }
       else 
       {
        res.send(result);
       }
    })
})

module.exports = markRoute;