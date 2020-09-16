/*x=parseInt(prompt("Primer número: "));

for(i=1;i<=x;i++){
    alert(i+"*");
}*/
/*function pyramid(numPisos) {
    for (i=0;i<numPisos;i++){
      let piso = '';
      for (let j = 0; j < i + 1; j++) {
        piso = piso + '*';
      }
      document.write(piso+"<br/>");
    }
  }
  numero=prompt("número de asteriscos: ");
  pyramid(numero);
*/ 

numero=parseInt(prompt("Número de asteriscos: "));
var asteriscos = ""; 

for(i=1;i<=numero;i++){
  document.write("*");
  //asteriscos=asteriscos+"*";
  //document.write(asteriscos+"<br/>");
}  
//alert(asteriscos);