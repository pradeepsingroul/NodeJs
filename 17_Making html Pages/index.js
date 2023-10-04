const express = require("express");
var app = express();
const path = require("path")
var path1 = path.join(__dirname,"public");

// app.use(express.static(path1))
/*it is used to load the static data of file which are present insidde the path
localhost:8080/index.html
localhost:8080/login.html
localhost:8080/signup.html*/

// if we want to remove the extension like localhost:80800/index then
//we can send the file using get methos as well
app.get("",(req,res)=>{//localhost:8080 it return index.html page
    res.sendFile(`${path1}/index.html`)
})
app.get("/signup",(req,res)=>{//localhost:8080/signup it return signup.html page
    res.sendFile(`${path1}/signup.html`)
})
app.get("/login",(req,res)=>{//localhost:8080/login it return login.html page
    res.sendFile(`${path1}/login.html`)
})

app.get("*",(req,res)=>{//if we write wrong url then 404.html will return
    res.sendFile(`${path1}/404.html`)
})
app.listen(8080)

