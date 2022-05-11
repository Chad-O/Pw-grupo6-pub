const doMult = _ =>{
    let a = document.getElementById("numA").value ;
    let b = document.getElementById("numB").value;
    
    document.getElementById("result").innerHTML = a * b; 
}

const doPlus = _ =>{
    let a = document.getElementById("numA").value ;
    let b = document.getElementById("numB").value;
    
    document.getElementById("result").innerHTML = parseInt(a) +  parseInt(b); 
}

const doMinus  = _ =>{
    let a = document.getElementById("numA").value ;
    let b = document.getElementById("numB").value;
    
    document.getElementById("result").innerHTML = parseInt(a) -  parseInt(b); 
}

const doDiv = _ =>{
    let a = document.getElementById("numA").value ;
    let b = document.getElementById("numB").value;
    if(parseInt(b) === 0){
        document.getElementById("result").innerHTML = "NO SE PUEDE DIVIDIR ENTRE 0"    
    }
    else{
        document.getElementById("result").innerHTML = parseInt(a) / parseInt(b); 
    }
}