
function truncateString ( str , num ) {

	let cadena = '';

  if ( str.length > num ){
  
      for ( let i = 0 ; i <= num - 1  ; i++ )
        {
            cadena += str[i];
        }
      
  }  

  return cadena + '...';
}

console.log (truncateString( 'Hola que mas', 7 ));
