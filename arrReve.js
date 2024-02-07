function reverseArray(a) {
     let arrB = [];
     for(let i=a.length-1; i>=0; i--){
         arrB.push(a[i])
     }
     console.log(arrB)
   return arrB
}
reverseArray([1,2,3,4])

