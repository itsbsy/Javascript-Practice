
    

function fun(array)
{
    let v1 = array[0]
    let v2 = array[1]
    let v3 = array[2]

    if( Array.isArray(v2))
    {
        v2 =fun( v2 )
       
    }
    if( Array.isArray( v3 ))
    {  
        v3 =fun( v3 )
       
        v3 =  "("+v3+")"
        
    }

    return (`${v2} ${v1} ${v3}`)
}




var output = fun([ "OR", ["<", ["XOR",["NOT","g","h"],"x"], "b"], [ "AND", ["==", [">","x","y"], "d"], ["!=", "e", [">=",["!=","b","c"],"q"]] ] ]);


console.log('"'+output+'"');