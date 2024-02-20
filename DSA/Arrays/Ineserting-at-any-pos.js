
//Inserting at any position in an array
function insertElementAtIndex(arr, element, index) {
    // Check if the index is within the valid range
    if (index < 0 || index > arr.length) {
      console.error('Invalid index');
      return;
    }
  
    // Create a new array to store the result
    var resultArray = [];
  
    // Copy elements before the specified index
    for (var i = 0; i < index; i++) {
      resultArray.push(arr[i]);
    }
  
    // Add the new element at the specified index
    resultArray.push(element);
  
    // Copy elements after the specified index
    for (var j = index; j < arr.length; j++) {
      resultArray.push(arr[j]);
    }
  
    return resultArray;
  }
  
  // Example usage:
  var originalArray = [1, 2, 3, 4, 5];
  var newArray = insertElementAtIndex(originalArray, 99, 2);
  
  console.log('Original Array:', originalArray);
  console.log('New Array:', newArray);
  

  //Inserting at last position in array
  function insertAtLast(array, element){
    array[array.length] = element
  }
  var array = [1,2,3,455,665]

  insertAtLast(array, 000)
  console.log(array)

