const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const db = require("./config/db");
db();



app.listen(process.env.PORT,(err)=>{
  if(err){
    console.log("failed to start server",err);  
  }else{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
  }
   
})



module.exports = app;
