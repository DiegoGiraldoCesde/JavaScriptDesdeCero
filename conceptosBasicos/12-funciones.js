/*function funcionSaludo() {
    console.log("¡Hola, función!\n")
}


for (let i = 0; i < 5; i++) {
    funcionSaludo()
}


let despedir = function() {
  document.write("Chaolin!! <br>");
};

despedir()
despedir()
despedir()
despedir()
despedir()

// Con parámetros

function funcionConParametros(name) {
    console.log(`¡Hola, ${name}!`)
}

funcionConParametros("Diego")
funcionConParametros("Don Diego")


function suma(a=0, b=0) {
    console.log(a + b)
}

suma(5, 10)
suma(20, 10)
suma(30, 10)
suma(5)
suma()

const miFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

miFunc2("Diego Giraldo")*/

const miFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const miFunc4 = (name) => console.log(`¡Hola, ${name}!`)

miFunc3("Diego Giraldo")
miFunc4("Diego Giraldo")


let sumar = function(a=0, b=0) {
  return a + b; // devuelve un valor
};

let resultado = sumar(5, 3);
console.log(resultado)  



let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)