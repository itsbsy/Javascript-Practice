function deleteElementAtIndex(arr, index) {
    if (index < 0 || index >= arr.length) {
      // Handle invalid index
      console.error('Invalid index');
      return arr;
    }
  
    // Shift elements to the left starting from the specified index
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
  
    // Remove the last element (which is now a duplicate)
    arr.pop();
  
    return arr;
  }
  
  // Example usage:
  let myArray = [1, 2, 3, 4, 5];
  let indexToDelete = 2;
  
  deleteElementAtIndex(myArray, indexToDelete);
  
  console.log(myArray); // Output: [1, 2, 4, 5]
  
  //Deleting last element of array

  function deleteLastElement(arr) {
    if (arr.length > 0) {
      arr.length = arr.length - 1;
    }
  }
  
  // Example usage:
  let myArray2 = [1, 2, 3, 4, 5];
  
  deleteLastElement(myArray2);
  
  console.log(myArray2); // Output: [1, 2, 3, 4]
  