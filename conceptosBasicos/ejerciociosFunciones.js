/* ##Promedio de notas ##

Crea una función que reciba un array de notas.
Usa for para sumarlas.
Devuelve el promedio.
Di si aprueba (>=3.0) o no.

//Función sin return


function saludar() {
    document.write("Hola, bienvenido<br>");
}

saludar();


//con return


function sumar(a, b) {
    return a + b;
}

let resultado = sumar(3, 5);

document.write(resultado);


function mostrar() {
    document.write("Hola<br>");
}

let dato = mostrar();

document.write(dato);


//ejemplo sin return
function cuadrado(num) {
    document.write(num * num + "<br>");
}

cuadrado(4);


//con return

function cuadrado(num) {
    return num * num;
}

let r = cuadrado(4);

document.write(r);*/


//función flecha

const greetings = (name = 'Diego') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}

console.log(greetings())
console.log(greetings('Diego Giraldo'))