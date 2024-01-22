string = ""
for (i = 1; i <= 5; i++) {
    for ( k = 0; k < 5 - i; k++) {
        string += " ";
    }
    for (j = 1; j <= i; j++) {
        string = string + "*"
    }
    string = string + "\n"
}
console.log(string)