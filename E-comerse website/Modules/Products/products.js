const express = require('express')
const connection = require("../DbConnectio/connection")
const router = express.Router();




router.get("/:id",(req,res)=>{
    const qur = "SELECT * from products";
    connection.query(qur,(err,result)=>{
        console.log(result)
    })
})

