var x = false;
console.log(x);
let y;
var data = {}

{
    console.log(x)
}

convert();

function convert(){
     x = true;
    function convert2(){
        console.log(x)
    }
    convert2()
    
}


