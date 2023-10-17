const express = require("express")
const {getConnection} = require("./dbConnection")
const app = express()

const middleWare = (req,res,next)=>{
    if(req.query.age>18){
        next()
    }else{
        res.send("You are under age you cant access this url")
    }
}

//uploading files inside the database
app.post("/upload",(req,res)=>{
    res.send("File uploading...")
})






// app.use(middleWare) //if you want to apply middle ware in all the apis

//get Apis
// app.get("/api/get",middleWare,(req,res)=>{
//     res.send("Hello this is pradeep lodhi")
// })

//post apis
// app.post("/api/post",(req,res)=>{
//     res.send("Hello this is pradeep lodhi")
// })

app.listen(5000)