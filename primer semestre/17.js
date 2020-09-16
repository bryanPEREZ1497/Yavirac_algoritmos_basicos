/*var a=0; 
var b=1; 
var c; 
var i; 
var x;

x = prompt("Cuantos numeros quieres que te muestre?");

document.write(a+" ");

document.write(b+" ");

for(i=3;i<=x;i++)
{
c=a+b; a=b; b=c; document.write(c+" ");
}*/

var limit = prompt("");
var fibo = [0,1];

for(i=2; i <= limit; i++){
	fibo.push(fibo[i-1] + fibo[i-2]);
	document.write(fibo[i]+"<br/>");	
}



