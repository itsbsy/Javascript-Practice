function calculateSupply(age,amount_per_day)
{
    max_age=60
    supply=0
    if(age<max_age)
    {
       supply= Math.round(amount_per_day*365)
    }
    return(supply)
}
console.log(calculateSupply(59,15000.75))