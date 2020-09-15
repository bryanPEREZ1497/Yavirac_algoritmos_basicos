//entra un numeroy hay que invertirlo. Ejemplo: 123 a 321
//
//
function numeroInvertido (numero) 
	{
		let response = [];

		while ( numero > 12 )
		
		{
			let digitos = numero.toString().length;

			if ( digitos === 2) 
			{
				response.unshift(numero/100);
				response.unshift(numero%100);


			}

			else if ( digitos === 3)
			{
				response.unshift(numero
			}

			
		}

		return numero < 12 ? `El número ${numero} no puede ser invertido`: 
