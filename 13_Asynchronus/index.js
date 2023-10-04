

console.log("Begining")// firstly it will print

var id = setInterval(() => {
    console.log("Interval") // in the last this line will print
    if(id){
        clearInterval(id)
    }
}, 1000);

console.log("finished")//then this line will print
