let a = 20;
let b = 0;

console.log("first",a+b);

var promise = new Promise((resolve,reject)=>{
    resolve(30)
})

promise.then((data)=>{
    b = data;
    console.log("promise",a+b);
})
console.log("last",a+b)