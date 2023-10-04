const express = require("express")


const app = express();


const routeMiddleware = (req,res,next)=>{
    if(req.query.age>18){
        next()
    }else{
        res.send("you can't access the this page")
    }
}

app.get("/api/home",(req,res)=>{
    res.send("Welcome to the home page!")
})

app.get("/api/contact",(req,res)=>{
    res.send("Welcome to the contact page!")
})

//first way to define route middleware in particular route example is given below
// app.get("/api/about",routeMiddleware,(req,res)=>{
//     res.send("Welcome to the about page!")
// })
// app.get("/api/help",routeMiddleware,(req,res)=>{
//     res.send("Welcome to the help page!")
// })


//this is second way to use route middleware to the particular route
const route = express.Router();
route.use(routeMiddleware)
app.use("/",route)
route.get("/api/about",(req,res)=>{
    res.send("Welcome to the about page!")
})
route.get("/api/help",(req,res)=>{
    res.send("Welcome to the help page!")
})



app.listen(5000)