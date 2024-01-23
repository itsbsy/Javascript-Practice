let data = [1,2,3,4,5,6,7,8]
let newArray = [1,2,3,4,[4,6,2,[7,0,2,7,3,[3,5,4,12]]]]

// let newData = data.map((item) => [item+1, item+2])
// let newestData = newData.flat(1);
// console.log(newData, newestData)
let newDataProMax = newArray.flat(0);
console.log(newDataProMax);