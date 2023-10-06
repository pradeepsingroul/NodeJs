const express = require("express")
const app = express();
const {dataDikhao} = require("../CRUD/read.js")
const {iseInsertKaro} = require("../CRUD/create.js")
const {iseDeleteKaro} = require("../CRUD/delete.js")
const {iseUpdataKaro} = require("../CRUD/update.js")
app.use(express.json())



//get all data
app.get("/api/items",async (req,res)=>{
    let data = await dataDikhao();
    res.send(data)
    
})

//post data
app.post("/api/post/items", async (req,res)=>{
    let entity = req.body;
    // console.log(object)
    let data = await iseInsertKaro(entity);
    res.send(data)
    
})

//update
app.put("/api/update/items", async (req,res)=>{
    let toSet = req.body;
    let identity = {name: req.query.name};
    // console.log(object) 
    let data = await iseUpdataKaro(identity,toSet);
    // console.log('data', data); 
    res.send(data) 
    
})

//delete api
app.delete("/api/delete/items", async (req,res)=>{
    let identity = {ham: req.query.name};
    // console.log(object) 
    let data = await iseDeleteKaro(identity);
    // console.log('data', data); 
    res.send(data) 
    
})
app.listen(5000)