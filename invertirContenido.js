//Descripcion
//El programa recibe dos array, uno de los cuales está vacío; muestra cuál es el vacío y copia en este los elementos del otro en orden distinto.
function invertirContenido(array1, array2) {
    let estaVacioPrimerArray=Boolean;
    array1.length===0 ? estaVacioPrimerArray===true:estaVacioPrimerArray=false;
    if (estaVacioPrimerArray) {
        for (let i = 0; i <= array2.length-1; i++) {
            array1.push(array2[array2.length-1-i]);    
        }
        return `El array1 no tenía elementos pero ahora sus elementos son ${array1}, que vienen del array2 ${array2}`;
    }
    else {
        for (let i = 0; i <= array1.length-1; i++) {
            array2.push(array1[array1.length-1-i]);    
        }
        return `El array2 no tenía elementos pero ahora sus elementos son ${array2}, que vienen del array1 ${array1}`;
    }
}

console.log(invertirContenido([2,3,5,6], []));