///Funciones
//Las funciones son bloques de código reutilizables que realizan una tarea específica. Pueden aceptar parámetros y devolver valores. Las funciones pueden ser declaradas de varias formas, incluyendo funciones tradicionales, funciones anónimas y funciones flecha.

// Función tradicional 

/*function funcionSaludo() {
    console.log(`¡Hola!`)
}

funcionSaludo("diego")
/*


/*for (let i = 0; i < 5; i++) {
    funcionSaludo()
}



let despedir = function() {
  console.log("Chaolin!!")
};

funcionSaludo()
despedir()


// Con parámetros

function funcionConParametros(name="usuario", apellido="desconocido") {
    console.log(`¡Hola, ${name} ${apellido}!`)
}

funcionConParametros("Diego", "Giraldo")
//funcionConParametros("Don Diego", "Giraldo")


function suma(a=0, b=0) {
    console.log(a + b)
}

suma(5, 10)
suma(20, 10)
suma(30, 10)
suma(5)
suma()


/*
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
*/
// Funciones que devuelven valores

/*let sumar = function(a=0, b=0) {
  return a + b; // devuelve un valor
};

let resultado = sumar(5, 3);
console.log(resultado)  



let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)*/


//Repaso funciones 

/*
function mostrar() {
 return "Hola";
}

let dato = mostrar();
console.log(dato);*/



//ejemplo sin return

/*function cuadrado(num) {
    console.log(`El cuadrado de ${num} es ${num * num}`);
}

cuadrado(4);

//con return

function cuadrado(num) {
    return num * num;
}

let r = cuadrado(2);


console.log(r);



*/
//## función flecha ##

const greetings = (name = 'Diego') => `Hello, ${name}!`


console.log(greetings("Luisa"))
//console.log(greetings('Diego Giraldo')) 