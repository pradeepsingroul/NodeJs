let a = 20;
var promise = new Promise((resolve,reject)=>{
    // resolv(50);//resolv is not define so line 8 will execute 
    resolve(50)//now line 5  will execute
})
promise.then((data)=>{
    a = data;
    console.log("Promises",a)
}).catch((err)=>{
    console.log(err)
})

console.log("Beginning");
console.log("first",a)

setInterval(() => {
    console.log("3 sec interval")
}, 3000);

setInterval(() => {
    console.log("5 sec interval")
}, 5000);

console.log("Finishing");


console.log("last",a)