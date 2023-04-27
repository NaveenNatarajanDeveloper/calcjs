function key(a)
{
    document.getElementById("display").value+=a;
    
}

function C()
{
    document.getElementById("display").value="";
}

function d()
{
    let d = document.getElementById("display").value;
    document.getElementById("display").value=d.slice(0, d.length-1);
}
function sol(){
    let a = document.getElementById("display").value;  
    document.getElementById("display").value=eval(a);
}

