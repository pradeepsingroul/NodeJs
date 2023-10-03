const http = require("http")

//creatting server
http.createServer((req,res)=>{
    res.write("<h1>Welcome to the HomePage</h1>")
    res.end();
}).listen(4500)