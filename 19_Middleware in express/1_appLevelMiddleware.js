const express = require("express")
const data = require("./data")

var app = express();

// - Applocation level middlewares : this type of middle ware work globally it will apply in all the routes or url
var reqFilter = (req,res,next)=>{
    //we can specify the filter logic here 
    //like if you want that only 18+ user can access the url or website then
    if(req.query.age>18){
        next()
    }else{
       res.send("You can't access this page")
    }
    
}
app.use(reqFilter)

app.get("/",(req,res)=>{
    res.send("welcome to the home page")
})

app.get("/users",(req,res)=>{
    res.send(JSON.stringify(data.arr))
})

app.listen(8080);