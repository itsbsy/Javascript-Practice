n = 666
let rem
sum=0
while(n>0)
{
    rem=n%10
    sum=sum+rem
    n=Math.floor(n/10)


}

console.log(sum)