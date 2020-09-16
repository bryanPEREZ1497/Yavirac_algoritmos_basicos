//el programa muestra los números primos hasta el 100
var x;
var divisor;

function esDivisible(x,divisor){
  divisibilidad=x%divisor==0;
  return divisibilidad;
}

for(i=0;i<=100;i++) {
    if (esDivisible(i , 1) && esDivisible(i , i)){
      document.write(i+"<br/>");  
   }
         
}


