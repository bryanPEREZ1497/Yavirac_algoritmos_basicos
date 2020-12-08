
function darCadenaRepetida ( cadena , veces ) {

	let cadenaRepetida = '';

	for ( i = 0 ; i < veces ; i ++ ) {

		cadenaRepetida += cadena;

	}

	return cadenaRepetida;

}

console.log ( darCadenaRepetida ( 'bryan perez' , 4 ) );
