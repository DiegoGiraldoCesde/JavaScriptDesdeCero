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

// Operador ternario

const message = edad == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

// switch

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

/* Ejercicios

 if else else if ternaria

 1. Imprime por consola tu nombre si una variable toma su valor

 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
    dependiendo de la edad 

 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

 switch

 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

 9. Usa un switch para hacer de nuevo el ejercicio 6

 10. Usa un switch para hacer de nuevo el ejercicio 7
*/