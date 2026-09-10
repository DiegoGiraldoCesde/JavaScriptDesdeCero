// if, else if, else

// if (si)

let num = 3;
if (num > 0) {
  console.log(`${num} es un número positivo`);
} else {
  console.log(`${num} es un número negativo`);
}
//  3 es un número positivo

num = -3;
if (num > 0) {
  console.log(`${num} es un número positivo`);
} else {
  console.log(`${num} es un número negativo`);
}
// -3 es un número negativo

let edad = 37

if (edad == 37) {
    console.log("La edad es 37")
}

// else (si no)

if (edad == 37) {
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}

// else if (si no, si)

if (edad == 37) {
    console.log("La edad es 37")
} else if (edad < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37 ni es menor de edad")
}

// Ejemplos if else if else

let edadPension = "veinte"

if (edadPension >= 65) {
    console.log("Puedes pensionarse")
} else if (edadPension >= 60) {
    console.log("Puedes pensionarte si tienes 30 años cotizados")
} else {
    console.log("No puedes pensionarte")
}
console.log("no es un número")

// Usuario logueado

nombreUsuario = ""

if (nombreUsuario) {
  console.log(`Bienvenido, ${nombreUsuario}`);
} else {
  console.log("Bienvenido, Invitado.");
}

// otro ejemplo if else if else

tengoHambre = true;
tengoComida = false;
tengoPlata = false;

if (tengoHambre && tengoComida) {
    console.log("Tengo hambre, tengo comida, voy a comer")
} 
else if (tengoHambre && tengoPlata) {
    console.log(`Tengo hambre, no tengo comida pero si tengo plata, 
        voy a comer algo afuera`)
}
else {
    console.log("No puedo comer")
}


let a = 0;
if (a > 0) {
  console.log(`${a} es un número positivo`);
} else if (a < 0) {
  console.log(`${a} es un número negativo`);
} else if (a == 0) {
  console.log(`${a} es cero`);
} else {
  console.log(`${a} no es un número`);
}

// ## switch ##

//Switch es una alternativa para if else if else else. La instrucción switch comienza con una palabra 
// clave switch seguida de un paréntesis y un bloque de código. 
// Dentro del bloque de código tendremos diferentes casos. El bloque de casos se ejecuta si el valor 
// en el paréntesis de la declaración de cambio coincide con el valor del caso. La declaración de break es para 
// terminar la ejecución. Esto para que la ejecución del código se detenga después de que se cumpla la condición.
//  El bloque default se ejecuta si todos los casos no cumplen la condición.

let dia = 9
let nombreDia

switch (dia) {
    case 0:
        nombreDia = "Lunes"
        break
    case 1:
        nombreDia = "Martes"
        break
    case 2:
        nombreDia = "Miércoles"
        break
    case 3:
        nombreDia = "Jueves"
        break
    case 4:
        nombreDia = "Viernes"
        break
    case 5:
        nombreDia = "Sábado"
        break
    case 6:
        nombreDia = "Domingo"
        break
    default:
        nombreDia = "Número de día incorrecto"
}

console.log(nombreDia)

