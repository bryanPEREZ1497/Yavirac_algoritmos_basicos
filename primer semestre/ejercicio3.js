//Escriba un programa que pida números mientras el usuario indique que quiere seguir introduciendo números.
//Para indicar que quiere seguir escribiendo números, el usuario deberá contestar S o s a la pregunta.

do{
    var numero=prompt("Escriba un número: ");
    var pregunta=prompt("¿Desea ingresar más números?: ");
}

while (pregunta=="s"||pregunta=="S");
    