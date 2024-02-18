

function anagram(input){
    const word = "Brijesh"
    let obj = {}
    for (i=0;i<input.length;i++){
        obj[input[i]] = (obj[input[i]] || 0 ) +1;
    }
    for (i=0;i<word.length;i++){
         if(!obj[input[i]]){
            return false
            };

    }

    console.log(obj)
}
anagram("brijesh");
function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.toLowerCase();
    const cleanStr2 = str2.toLowerCase();
  
    // Sort the characters in the strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    // Check if the sorted strings are equal
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage
  const word1 = "listen";
  const word2 = "silent";
  
  if (areAnagrams(word1, word2)) {
    console.log(`${word1} and ${word2} are anagrams.`);
  } else {
    console.log(`${word1} and ${word2} are not anagrams.`);
  }