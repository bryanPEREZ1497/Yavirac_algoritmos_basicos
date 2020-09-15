function searchPosicition(arr, num) {
    let posicion = arr.indexOf(num);
    let verificar = false;
    if (posicion === -1) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (num < arr[i]) {
                verificar = true;
                return i
            }            
        }
        if (verificar == false) {
            return arr.length;
        }
    }
    else {
            return posicion;
        }
}
//console.log(searchPosicition([0,1,3,5,7,9,11,13,15,17,19],20))
//document.write(searchPosicition([0,1,3,5,7,9,11,13,15,17,19],20))
//algoritmo correcto

