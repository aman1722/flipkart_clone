const express = require("express");
const { connection } = require("./connection/db");
require("dotenv").config()


const app = express();




app.listen(process.env.port,async()=>{
    try {
      await connection
      console.log("connected to db!")
    } catch (error) {
     console.log("unable to connect db!")
     console.log(error)
    }
   console.log(`app is running at port ${process.env.port}`)
 })

 