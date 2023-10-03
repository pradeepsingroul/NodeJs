const fs = require("fs")
const path = require("path")//it is used to get the path 


const dir = path.dirname(__filename, "files")
console.log('dir', dir);
//sample.txt file will be created insdie the files folder
// fs.writeFileSync("C:/Users/prade/OneDrive/Desktop/Learning/NodeJs/NodeJs/11_Files reading writing/sample.txt","this is sameple file ")

// for (var i = 0; i < 5; i++) {
//     // it will create a simple files inside the files folder
//     fs.writeFileSync(`C:/Users/prade/OneDrive/Desktop/Learning/NodeJs/NodeJs/11_Files reading writing/files/sample${i}.txt`, "this is simple file")
// }


//to read the files which are present inside the file directory
fs.readdir(path.join(__dirname, "files"), (err, files) => {
    files.forEach((file)=>{
       fs.readFile(`./files/${file}`,"utf-8",(err,res)=>{
        console.log(res)
       })
    })
})
