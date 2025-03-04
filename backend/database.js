require("dotenv");
const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user:process.env.USER || "root",
    password:process.env.PASSWORD || "Rithish@2006",
    database:process.env.DB_NAME || "studentmarks"

})

db.connect((error)=>{
    if(error)console.error("An error occured while connecting to the db",error);
    else console.log("db connected successfully!");
})

module.exports = db;

