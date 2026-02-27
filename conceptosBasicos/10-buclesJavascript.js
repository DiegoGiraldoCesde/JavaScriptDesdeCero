/*
Desde ahora en adelante estaremos trabajando con archivos .js, 
los cuales contienen código JavaScript. 
Para ejecutar el código, podemos usar un navegador web o un entorno 
de desarrollo como Visual Studio Code. 
En este caso, usaremos el navegador web. Para ello, creamos un 
archivo HTML en el índice 09 y a medida que avanzamos insertamos el archivo 
de practica en scr, que enlaza con nuestro archivo JavaScript y lo abrimos 
en el navegador. 
*/

alert("Hola, esto se esta ejecutando desde 10-buclesJavascript.js")

// Bucles en JavaScript

/*Los bucles son estructuras de control que permiten repetir un bloque de código 
mientras se cumpla una condición. En JavaScript, existen varios tipos de bucles: 
while, do...while y for.*/

//Bucle while

let i=1
while(i<=10){
    document.write(i + "<br>")
    i++
}

//Ejemplo 2 usando prompt para capturar lo que escribe el usuario

let limite = Number(prompt("Ingrese hasta qué número contar:"));
let i2 = 1;

while (i2 <= limite) {
  document.write(i2 + "<br>");
  i2++;
}

//Bucle do...while

i = 6
do {
    document.write(`Hola ${i}<br>`)
    i++
} while (i < 5);

document.write("saliste");

do {
  numero = Number(prompt("Ingrese un número mayor que 10:"));
} while (numero <= 10);

document.write("Número válido: " + numero);


// Ejemplo 2 usando un menú
let opcion;

do {
  opcion = Number(prompt("Ingrese una opción (0 para salir):"));

  document.write("Menú activo<br>");

} while (opcion !== 0);

document.write("Programa cerrado");

// Ejemplo 3 usando un menú con opciones
//let opcion;

do {
  opcion = Number(prompt(
    "MENÚ\n1. Saludar\n2. Mostrar fecha\n0. Salir"
  ));

  if (opcion === 1) {
    document.write("Hola usuario<br>");
  } 
  else if (opcion === 2) {
    document.write(new Date() + "<br>");
  }

} while (opcion !== 0);

document.write("Programa finalizado");

// Ejemplo 4: contar del 1 al 100
i = 1;
do {
  document.write(i + "<br>");
  i++;
}while(i <= 100){
  document.write("Ya ha llegado a 100")
}


//## Ciclo for ##

for (let i = 1; i <= 5; i++) {
  document.write(`Vuelta # ${i}<br>`);
}

/*Ejemplo 2: contar desde un número inicial hasta un número final 
ingresados por el usuario*/

let inicio = Number(prompt("Número inicial:"));
let fin = Number(prompt("Número final:"));

for (let i = inicio; i <= fin; i++) {
  document.write(i + "<br>");
}

// Ejemplo 3: recorrer un array con for

let frutas = ["Manzana", "Pera", "Banano"];

for (let i = 0; i < frutas.length; i++) {
  document.write(frutas[i] + "<br>");
}