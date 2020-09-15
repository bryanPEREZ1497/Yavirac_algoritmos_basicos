//Entra un string y un miniString, dar la posicion del miniString en string, si no está en string devolver -1, si no hay 
//miniString devolver 0;


console.log (verificar('bryan','b'));


function verificar(string,miniString) {
    if (miniString.length===0) {
        return 'miniString esta vacío';
    } else {
        darPosicion(string,miniString);
    }     
}

function darPosicion(string,miniString) {
    let respueta;
    let verificar=false;
    for (let posicion = 0; posicion <= string.length-1; posicion++) {
        if (string[posicion]===miniString) {
            verificar= true;
            respueta=posicion;
            posicion=string.length;
        }        
    }
    if (verificar==true) {
        
        return `La posicion de ${miniString} en ${string} es ${respueta-1}`;
    }
    else{
        return -1;  
    }
}


