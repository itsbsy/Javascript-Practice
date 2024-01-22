string=""
num=1;
for(i=1;i<=5;i++)
    {
        for(j=1;j<=i;j++)
        {
            string= string+num+" "
            num++;
        }
        string=string+"\n"
    }
    console.log(string)