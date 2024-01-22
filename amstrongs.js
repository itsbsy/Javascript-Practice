var n = 153;
let rem;
let sum = 0;
let temp;
temp = n;
while (temp > 0) {
    rem = temp % 10;
    // console.log("rem", rem)
    sum = sum + rem*rem*rem;
    // console.log("sum", sum)
    temp = Math.floor(temp / 10);
    // console.log("temp", temp)
}
if (n == sum) {
    console.log("It is an amstrongs number")
}
else {
    console.log("It is not an amstrongs number")
}
