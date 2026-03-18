//Calculadora
/*
const calculadora = (num1, num2, opcion) => {
    if (opcion === 1) {
        return num1 + num2;
    }else if (opcion === 2) {
        return num1 - num2;
    }else if (opcion === 3) {
        return num1 * num2;
    }else if (opcion === 4) {
        if (num2 === 0) {
            return "No se puede dividir por cero";
        }
        return num1 / num2;
    }else {
        return "Opción no válida";
    }
}

let n1 = Number(prompt("Ingrese el primer número: "));
let n2 = Number(prompt("Ingrese el segundo número: "));

let opcion = Number(prompt("---Menú---\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\nIngrese la opción: "));
let resultado = calculadora(n1, n2, opcion);
document.write(`El resultado es: ${resultado}`);
let estudiantes = [];
let opcion;

const agregarEstudiante = (nombre) => {
    estudiantes.push(nombre);
} 

while (true) { 
let nombreEstudiante = prompt("Ingrese el nombre del estudiante o 0 para salir ");
if (nombreEstudiante === "0") {
    break;
}
agregarEstudiante(nombreEstudiante);   
}
document.write(`Lista de estudiantes: ${estudiantes}`); */

function calculadora() {

    let opcion = Number(prompt("---Calculadora---\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\nIngrese la opción: "));

    let num1 = Number(prompt("Ingrese el primer número: "));
    let num2 = Number(prompt("Ingrese el segundo número: "));
    let resultado;

    switch (opcion) {
        case 1:
            resultado = num1 + num2;
            alert ("El resultado es: " + resultado);
            break;
        case 2:
            resultado = num1 - num2;
            alert ("El resultado es: " + resultado);
            break
        case 3:
            return num1 * num2;
            alert ("El resultado es: " + resultado);
            break
        case 4:
            if (num2 === 0) {
                alert("No se puede dividir por cero");
            } else {
                resultado = num1 / num2;
                alert ("El resultado es: " + resultado);
            }
            break
        default:
            alert("Opción no válida");
    }

}