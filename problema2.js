
/*class PROBLEMA2 {
    constructor(){
        this.=;
    }
    
    sumarMultiplos(){
                
    }

}*/
//descripcion
//el programa muestra los 20 primeros numeros de la serie de fibonacci,
function fibonacci(numero)
    {
        let numeros=[0,1];
        for (let i = 2; i < numero; i++) {
            numeros[i] = numeros[i - 2] + numeros[i - 1];
        }
        return numros;
    }
