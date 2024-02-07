let calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };
  
  console.log(calculator.add(5, 3));

  //compare 2 objects
//   function areObjectsEqual(obj1, obj2) {
//     return JSON.stringify(obj1) === JSON.stringify(obj2);
//   }
  
//   let objA = { a: 1, b: 2 };
//   let objB = { b: 2, a: 1 };
  
//   console.log(areObjectsEqual(objA, objB)); 
  
  function areObjectsEqual(obj1, obj2) {
    console.log("====console 1",JSON.stringify(obj2, Object.keys(obj2).sort()))
    const stringifiedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    const stringifiedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());
  
    return stringifiedObj1 === stringifiedObj2;
  }
  
  let objA = { a: 1, b: 2 };
  let objB = { b: 2, a: 1 };
  
  console.log(areObjectsEqual(objA, objB)); // true
  


  //delete an key of object
  let sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
  };
  
  delete sampleObject.key2;
  console.log(sampleObject);
  

