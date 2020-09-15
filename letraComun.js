function darLetraComun ( arr ) {

    let contadorElementos = 0;

    let comun = arr[0];

    let j = 0;

	let apoyo = comun;

    while ( apoyo != "") {

        for ( i = 0 ; i <= arr.length - 1 ; i ++) {

            if ( arr [i].includes(apoyo) ) {
            
                contadorElementos ++;
            }

            else {

                contadorElementos = 0;

                i = arr.lenght;
            }
        }

        if ( contadorElementos === arr.length ) {

            return `Las letras comunes son ${apoyo}`;
        }

        else {

            j ++;

            apoyo = comun.slice(0,-j);

        }


    }

            return `No hay letras en común`;

    
}      

console.log(darLetraComun(['bryaaaaaaasss','brasdasdasdasdsadasddsadas']));
