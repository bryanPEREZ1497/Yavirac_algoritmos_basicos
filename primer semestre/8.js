do{
    x=parseInt(prompt("Primer número: "));
    y=parseInt(prompt("Segundo número: "));
} 
while(x>y);

suma=0;
for(i=x;i<=y;i++){
    suma=suma+i;
}
alert(suma);