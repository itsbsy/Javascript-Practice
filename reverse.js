n = 789
let rem
str=""
while(n>0)
{
    rem=n%10
    str=str+rem
    n=Math.floor(n/10)


}

console.log(str)