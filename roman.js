let roman = document.getElementById('roman');
let button = document.getElementById('submit');
let respuesta = document.getElementById('res');

button.addEventListener('click',darEntero);

function convertir(roman) {
    let entero = 0;
    let cuatro = roman.match(/iv/gi);
    let nueve = roman.match(/ix/gi);
    let cuarenta = roman.match(/xl/gi);
    let noventa = roman.match(/xc/gi);
    let cuatrocientos = roman.match(/cd/gi);
    let novecientos = roman.match(/cm/gi);

    for (i = 0; i <= roman.length - 1; i++) {
        switch (roman[i]) {
            case 'I':
            case 'i':
                entero += 1;
                break;

            case 'v':
            case 'V':
                entero += 5;
                break;

            case 'x':
            case 'X':
                entero += 10;
                break;

            case 'l':
            case 'L':
                entero += 50;
                break;

            case 'c':
            case 'C':
                entero += 100;
                break;

            case 'd':
            case 'D':
                entero += 500;
                break;

            case 'm':
            case 'M':
                entero += 1000;
                break;
        }
    }

    //restas    
    if (cuatro) entero -= 2;
    if (nueve) entero -= 2;
    if (cuarenta) entero -= 20;
    if (noventa) entero -= 20;
    if (cuatrocientos) entero -= 200;
    if (novecientos) entero -= 200;
    return entero;
}

function darEntero() {
    let entero = convertir(roman.value);
    respuesta.innerHTML=`El número es ${entero}`
} 
