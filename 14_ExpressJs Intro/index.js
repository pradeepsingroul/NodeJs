const express = require("express");
const app = express();


//used to provide a route and make an api
app.get("/",(req,res)=>{
    res.send("hello world!, this is home page....")// this content will be viewable on browser when we write "localhost:8080/"
})

//used to provide a route and make an api
app.get("/about",(req,res)=>{
    res.send("hello world!, this is about page....")// this content will be viewable on browser when we write "localhost:8080/about"
})

//used to define port
app.listen(8080)