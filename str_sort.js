function reverseString(str) {

    var split = str.split(""); 
    var reverse = split.sort(); 
    var joinArray = reverse.join(""); 
    return(joinArray)
   
   

}
 
console.log(reverseString("this is sorting program"))