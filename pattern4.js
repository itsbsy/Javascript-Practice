string = ""
for (i = 5; i >=1; i--) {
    for ( k = 0; k <5 - i; k++) {
        string += " ";
    }
    for (j = i; j >= 1; j--) {
        string = string + "*"
    }
    string = string + "\n"
}
console.log(string)