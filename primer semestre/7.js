//Muestra los números impares del intervalo ingresado

/*do{
    x=parseInt(prompt("Primer número: "));
    y=parseInt(prompt("Segundo número: "));
} 
while(x>y);

for(i=x;i<=y;i++){
    if(i%2!=0){
        alert(i);
    }
}*/
//Muestra los números pares del intervalo ingresado

do{
    x=parseInt(prompt("Primer número: "));
    y=parseInt(prompt("Segundo número: "));
} 
while(x>y);

for(i=x;i<=y;i++){
    if(i%2==0){
        alert(i);
    }
}