str="";

for (i = 1; i <= 5; i++) 
{

        for (j = 1; j <= 5; j++) 
        {
                str += (i+j)%2;
        }
    
   

    str = str + "\n"
}

console.log(str)
