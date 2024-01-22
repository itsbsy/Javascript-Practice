const pi=3.14
// Circumference of circle
circumference=0
function calcircumference(radius) {

    circumference = 2 *pi* radius
    return ("The circumference of the circle is " + circumference)

}



// Area of circle
function calcarea(radius) {

    circumference = pi* (radius*radius)
    return ("The area of the circle is " + circumference)

}

console.log(calcircumference(9))
console.log(calcarea(7))