/* Funciones
Las funciones son bloques de código reutilizables que realizan una tarea específica. Pueden aceptar parámetros y devolver valores. Las funciones pueden ser declaradas de varias formas, incluyendo funciones tradicionales, funciones anónimas y funciones flecha.

// Función tradicional */

function funcionSaludo() {
    console.log("¡Hola, función!\n")
}


for (let i = 0; i < 5; i++) {
    funcionSaludo()
}


let despedir = function() {
  console.log("Chaolin!!")
};

despedir()


// Con parámetros

function funcionConParametros(name) {
    console.log(`¡Hola, ${name}!`)
}

funcionConParametros("Diego")
funcionConParametros("Don Diego")


function suma(a, b) {
    console.log(a + b)
}

suma(5, 10)
suma(20, 10)
suma(30, 10)
suma(5)
suma()

// Funciones anónimas

const miFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}


// Funciones flecha (arrow functions)

miFunc2("Diego Giraldo")

const miFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const miFunc4 = (name) => console.log(`¡Hola, ${name}!`)

miFunc3("Diego Giraldo")
miFunc4("Diego Giraldo")

// Funciones que devuelven valores

let sumar = function(a=0, b=0) {
  return a + b; // devuelve un valor
};

let resultado = sumar(5, 3);
console.log(resultado)  



let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)


//Repaso funciones 


function mostrar() {
 console.log("Hola");
}

let dato = mostrar();
document.write(dato);


//ejemplo sin return

function cuadrado(num) {
    document.write(num * num + "<br>");
}

//con return

function cuadrado(num) {
    return num * num;
}

let r = cuadrado(4);

cuadrado(4);
console.log(r);


//## función flecha ##

const greetings = (name = 'Diego') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}

console.log(greetings())
console.log(greetings('Diego Giraldo'))