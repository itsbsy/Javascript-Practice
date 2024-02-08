
function hourglassSum(arr) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    console.log(maxSum)
    for(let i=0; i<=3; i++){
        for(let j =0; j<=3; j++){
            let currentSum = 
            (arr[i][j])+
            (arr[i][j+1])+
            (arr[i][j+2])+
            (arr[i+1][j+1])+
            (arr[i+2][j])+
            (arr[i+2][j+1])+
            (arr[i+2][j+2]);
            if(maxSum < currentSum){
                maxSum = currentSum
            }
            console.log(maxSum, currentSum)
        }
        
    }
    return parseInt(maxSum)
}
  
  // Example usage:
  const inputArray = [
    [-1,-1,0,-9,-2,-2],
    [-2,-1,-6,-8,-2,-5],
    [-1 ,-1 ,-1, -2, -3, -4],
    [-1 ,-9 ,-2 ,-4 ,-4 ,-5],
    [-7 ,-3 ,-3 ,-2, -9, -9],
    [-1 ,-3, -1 ,-2 ,-4 ,-5]
  ];
  
  const result = hourglassSum(inputArray);
  console.log(result); // Output: 14
  