function isSubset(a1, a2) {
    const frequencyMap = {};
  
    // Create a frequency map of elements in array a1
    for (const num of a1) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Check if all elements of a2 are present in a1 and have enough occurrences
    for (const num of a2) {
      if (!frequencyMap[num]) {
        return false; // Element not found in a1
      }
      frequencyMap[num]--;
    }
  
    return true; // All elements of a2 are present in a1
  }
  
  // Example usage:
  const a1 = [1, 2, 2, 2, 3, 4, 5, 6];
  const a2 = [2, 4, 6];
  
  if (isSubset(a1, a2)) {
    console.log("a2 is a subset of a1");
  } else {
    console.log("a2 is not a subset of a1");
  }
  