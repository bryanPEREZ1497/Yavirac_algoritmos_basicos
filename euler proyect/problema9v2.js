/*Un triplete pitagórico es un conjunto de tres números naturales, a < b < c , para los cuales,

a 2 + b 2 = c 2
Por ejemplo, 3 2 + 4 2 = 9 + 16 = 25 = 5 2 .

Existe exactamente un triplete pitagórico para el cual a + b + c = 1000.
Encuentre el producto abc .*/



let limiteParaI , limiteParaJ;

limiteParaI = 1000;

limiteParaJ = 1000;

let respuesta = [];

function darCuadrados () 
    
{
  
  for ( let i = 2 ; i < limiteParaI ; i ++)
        
  {
    //¿i tiene una raíz entera? Si sí, i es un cuadrado perfecto
    if ( Number.isInteger (Math.sqrt( i )))

    {
                
      for ( let j = 2 ; j < limiteParaJ ; j ++)

      {
                    
        //¿j tiene una raíz entera? Si sí, j es un cuadrado perfecto
        if ( Number.isInteger (Math.sqrt( j )))

        {
          if ( i < j && i+j === 12)

          {
            respuesta.push ( i );

            respuesta.push ( j );

            limiteParaJ = j;

            limiteParaI = i;

          }

        }
      }
    }
  }        
  return  respuesta;
}

//Noo recuerdo qué hice. Para sumar los tres numeros no hace falta que sean cuadrados perfectos