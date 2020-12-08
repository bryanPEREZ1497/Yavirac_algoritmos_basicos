
function darPrimoMasGrande (numero) 

{

    let  factores=[];
    let contador=0;
    let divisorPrimo=2;   

while ( numero != 1 && numero > 0)
    {
        if( numero % divisorPrimo == 0)
        {
            numero = numero / divisorPrimo;
            factores [contador] = divisorPrimo;
            contador++;
        }

        else 
        {
            divisorPrimo++;
        }
    

        return Math.max(factores);
    }

}

console.log ( darPrimoMasGrande (13195));