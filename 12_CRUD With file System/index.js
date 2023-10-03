const colors = require("colors")
const fs = require("fs")
const path = require("path")
const dirName = path.join(__dirname, "crud")
// console.log(dirName)


// create file
fs.writeFileSync(`${dirName}/document.txt`, "Learning node js and creating a file ")

//reading file
// fs.readFile(`${dirName}/document.txt`,"utf8",(err,res)=>{
//     if(err){
//         throw new Error
//     }else{
//         console.log(res.red);
//     }

// })

//updating file
// fs.appendFile(`${dirName}/document.txt`,"This content is inserted after creating the file",(err)=>{
//     if(!err){
//         console.log("data is appended to the file")
//     }
// })

//rename file
// fs.rename(`${dirName}/document.txt`,`${dirName}/renamed.txt`,(err)=>{
//     if(!err){
//         console.log("File name hasbeen changed")
//     }else{
//         console.log("File name has not been changed")
//     }
// })

// deleting a file
fs.unlink(`${dirName}/document.txt`, (err) => {
    if (!err) {
        console.log("File name hasbeen deleted")
    } else {
        console.log("File name has not been deleted")
    }
})