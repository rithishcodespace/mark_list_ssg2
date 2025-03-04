require("dotenv");
const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const markRoute = require("./routes/markRoute");
const mysql = require("./database")
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/",authRoute);
app.use("/",markRoute);
app.listen(PORT,()=>console.log(`server successfully running on localhost:${PORT}`));