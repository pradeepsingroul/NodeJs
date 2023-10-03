// global module are the module which are usable without importing
// Non-Global are the module which are not usable without importning

const fs = require("fs") //this is non global module
fs.writeFileSync("intro.text","Hello guy my name is pradeep singroul here i am learning Node js and this is a file which i am creating it by using fileSystem non-global module")

console.log("=>>>",__dirname) // to print directory name
console.log("=>>>",__filename)// to print file name
console.log("This is GblobalModule")

