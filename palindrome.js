function reverseString(str) {

    var split = str.split(""); 
    var reverse = split.reverse(); 
    var joinArray = reverse.join(""); 
   
    if(str==joinArray)
    {
        return("It is palindrome")
    }
    else{
        return("It is not palindrome")
    }

}
 
console.log(reverseString("tat"))