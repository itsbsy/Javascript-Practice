string=""
for(i=1;i<=5;i++)
    {
        for(j=1;j<=i;j++)
        {
            string= string+"*"
        }
        string=string+"\n"
    }

for(i=4;i>=1;i--)
        {
            for(j=i;j>=1;j--)
            {
                string= string+"*"
            }
            
            
            string=string+"\n" 
        }
        console.log(string)