let arr=[['h','o','l'],['','a',''],['m','a','n']];
let string='';
let fila=0;
while(fila <= arr[0].length-1){
    for ( let columna =0 ; columna <= 2 ; columna ++ ){
        string += arr[columna][fila];
    }
    fila++;
}

console.log(string);