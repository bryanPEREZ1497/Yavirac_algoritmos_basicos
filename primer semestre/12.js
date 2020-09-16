var n;
var contador;
var resultado=0;

do{
n=parseInt(prompt("Introduce un numero",""));
}while(n=="" || n==null || n<=0 || n>10 || isNaN(n));

for(contador=1;contador<=10;contador++){
    resultado=resultado+n;
    document.write(n+"*"+contador+"="+resultado+"<br/>");
}
/*var y;
y=prompt('GENERAR TABLA DE MULTIPLICAR','');
y=parseInt(y);
 
for (var x = 1; x <= 10; x++) {
	r=y*x;
    document.write(y+"x"+x+"="+ r + "<br>")
}*/