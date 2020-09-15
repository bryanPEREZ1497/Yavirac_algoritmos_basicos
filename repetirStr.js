function repeatStringNumTimes(str, num) {
  
  let respuesta = '';

  let tamanoStr = str.length;

  let tamanoApoyo = str.length;

  let posicionRespuesta = 0;

  let posicionStr = 0;
  
  while ( respuesta.length != ( tamanoStr*num ) ) 
  {
    for ( let i = posicionRespuesta ; i <= tamanoApoyo - 1 ; i ++)
    {
      respuesta[i] = str[posicionStr];
      
      posicionStr ++;

      posicionRespuesta ++;
    }

    tamanoApoyo += tamanoApoyo; 


    posicionStr = 0;
     
    
  }
  
  return respueta;
}

console.log ( repeatStringNumTimes( "abc", 3 ) );
