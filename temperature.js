// Celcius to faranheit

function celsiusToFahrenheit(celcius1)
{
    faranheit1=celcius1*1.8+32
    return(faranheit1)
}
// Faranheit to celcius
function FahrenheitToCelcius(faranheit2)
{
    celcius2=(faranheit2-32)*5/9
    return(celcius2)
}
console.log(celsiusToFahrenheit(40))
console.log(FahrenheitToCelcius(55))