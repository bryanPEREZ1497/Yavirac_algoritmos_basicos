

var suma=0;
var contador=-1;

do{
    var numeros=parseInt(prompt("Ingrese los números: "));    
    suma=suma+numeros;
    contador++;
}
while(numeros!=0);

promedio=(suma/contador);
document.write(promedio);

