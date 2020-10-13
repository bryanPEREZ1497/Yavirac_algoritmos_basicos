/* Encontrar el factorial de un numero y sumar sus dígitos*/

let factorial = numero => {
    if (numero === 1) return 1;   

    return numero * factorial(numero - 1);
}

let sumaDigitos = numero => {
    parseInt(numero)
    let suma = 0;
    let str = numero.toString();

    for (let i = 0; i <= str.length - 1; i++) {
        suma += Number(str[i]);
    }

    return `La suma de los dígitos de ${numero} es ${suma}`;
}

//console.log(factorial(100));
// console.log(sumaDigitos(factorial(100)));
console.log(parseInt(9.1));

//console.log(9.33e4)