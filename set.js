//removing duplicate elements from array
let arr = [3,6,44,1,756,34,890,76,4,5,2,6,2,6]
let uniqueElements = new Set(arr);
let uniqueArray = [...uniqueElements]
console.log(uniqueArray);