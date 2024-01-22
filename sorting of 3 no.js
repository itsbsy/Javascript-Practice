num1 = window.prompt("Enter 1st number")
num2 = window.prompt("Enter 2nd number")
num3 = window.prompt("Enter 3rd number")

if (num1 > num2 && num1 > num3)
    if (num2 > num3) {
        alert(num1+" " +num2+" "+ num3)
    }
    else {
        alert(num1+" " +num3+" "+ num2)
    }
else if (num2 > num1 && num2 > num3)
    if (num1 > num3) {
        alert(num2+" " +num1+" "+ num3)
    }
    else {
        alert(num2+" " +num3+" "+ num1)
    }
else if (num3 > num2 && num3 > num1)
    if (num1 > num2) {
        aalert(num3+" " +num1+" "+ num2)
    }
    else {
        alert(num3+" " +num2+" "+ num1)
    }