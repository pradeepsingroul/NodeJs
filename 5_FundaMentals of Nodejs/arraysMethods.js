
// ***********************************************************
//Arrays
var arr = [1,5,7,8,9,6,5,4,8]

// it will return an elements which matched with the condition which is present inside the filter funciton
var filtered = arr.filter((item)=>{
    return item%2===0;
})
console.log(filtered)

//map is used to modify and return elements
var mapped = arr.map((item)=>{
    return item*2;
})
console.log(mapped)

//forEach
arr.forEach((s)=>{
    console.log(s)
})

//slice used to copy arr
let copied = arr.slice();
console.log(copied)

//isArray() used to determine the value is array or not

//include used to find the value is present or not
console.log(arr.includes(1))

//indexOf used to find the first index of passed value
console.log(arr.indexOf(5))

//reverse() used to reverse an array
console.log(arr.reverse())

//sort() used to sort an array it sort by aschi value so if you want o sort array logically so u need to pass a function
console.log(arr.sort())

let sortedArr = arr.sort(function(a,b){
    return (a-b)
})
let sortedArr1 = arr.sort((a,b)=>{
    return (a-b)
})
console.log(sortedArr)

//splice() used to update or delete element
let splicedArr = arr.splice(1,4);
console.log(splicedArr)
