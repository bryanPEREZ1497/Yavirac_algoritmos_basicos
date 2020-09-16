//el programa pide un número y muestra si es o no primo
var contador=0;
var numero;

do{
    numero=parseInt(prompt("Ingrese el número: "));
}
while(!numero)

for(i=1;i<=numero;i++){
    if(numero%i==0){
        contador++;
    }
}

if(contador==2){
    alert("primo");
}

else{
    alert("no es primo");
}