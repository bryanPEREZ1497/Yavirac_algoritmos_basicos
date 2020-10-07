// //fibonacci con funcion recursiva 

// function fibonacci(a, b) {
//     let serieFibonacci = [];
//     if (serieFibonacci.length === 10) {
//         return serieFibonacci;
//     }
//     serieFibonacci.push(a);
//     return fibonacci(b, a + b)
// }

// console.log(fibonacci(0, 1))

function fibonacci(num) {
    if (num <= 1) return 1;  
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(6));

module.exports = fibonacci;

