nombre=prompt("Ingrese su nombre:");//nombre
while (!nombre){
    alert("Entrada incorrecta. Ingrese de nuevo");
    nombre=prompt("Ingrese su nombre:");
}

nota1=prompt("Ingrese nota del parcial 1: "); //nota1
while(!nota1||nota1<0||nota1>50||isNaN(nota1)){
    alert("Entrada incorrecta. Ingrese de nuevo.");
    nota1=prompt("Ingrese nota del parcial 1: ");
}

nota2=prompt("Ingrese nota del parcial 2: "); //nota2
while(!nota2||nota2<0||nota2>50){
    alert("Entrada incorrecta. Ingrese de nuevo.");
    nota2=prompt("Ingrese nota del parcial 2: ");
}
  

asistencia1=prompt("Ingrese asistencia del parcial 1: ");//asistencia1
while(!asistencia1||asistencia1<0||asistencia1>100){
    alert("Entrada incorrecta. Ingrese de nuevo.")
    asistencia1=prompt("Ingrese asistencia del parcial 1: ");
}

    
asistencia2=prompt("Ingrese asistencia del parcial 2: ");//asistencia2
while(!asistencia2||asistencia2<0||asistencia2>100){
    alert("Entrada incorrecta. Ingrese de nuevo.")
    asistencia2=prompt("Ingrese asistencia del parcial 2: ");
}


notaFinal=parseFloat(nota1)+parseFloat(nota2);
asistenciaFinal=(parseFloat(asistencia1)+parseFloat(asistencia2))/2;

alert(nombre+" tiene: "+" Nota final: "+notaFinal+" Asistencia total: "+asistenciaFinal);


if (notaFinal>30&&asistenciaFinal>=70){ //resultado
    alert("Aprobado");
}
else{
    alert("Reprobado");
}
//falta: validar nombres

