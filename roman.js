
function prueba (romano){
    
    let entero = 0;

    for ( iterador = 0 ; iterador <= romano.length -1 ; iterador ++ ){
        switch (romano[iterador]){
            case 'i':

            entero = entero + 1;
                        
            break;
        }
    }

    return entero;
}

