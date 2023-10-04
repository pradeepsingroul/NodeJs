const express = require("express")
var app = express();
// whenever user sent the data then we will take a help of req to get that data example is given below
//http://localhost:8080/?name=pradeep pradeep will print to in the browser
app.get("/",(req,res)=>{
    var name = req.query.name;
    res.send(`Welcome ${name}! this is a home page!`)
})

app.listen(8080)