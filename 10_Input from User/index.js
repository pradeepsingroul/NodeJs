// input taking
// procees is module is taking care of input taking it takes input as array
//
const fs = require("fs")
const input = process.argv;
// index 0      1        2 
// node index.js "data which you want to write"
if (input[2] === "add") {
    fs.writeFileSync("apple.txt", input[3])
}else if(input[2] === "delete"){
    fs.unlinkSync("apple.txt")
    console.log("Successfully deleted")
}