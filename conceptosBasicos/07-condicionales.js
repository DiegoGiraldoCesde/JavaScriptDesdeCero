// if, else if, else

// if (si)

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

// ## switch ##

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

