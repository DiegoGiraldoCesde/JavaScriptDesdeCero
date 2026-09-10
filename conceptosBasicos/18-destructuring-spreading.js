/*// Desestructuración y propagación
//La desestructuración es una forma de desempaquetar arrays y objetos 
// y asignarlos a una variable distinta.


//Crear un Array

let myArray = [1,2,3,4,5]
let [num1, num2, num3, num4, num5] = myArray

console.log(num2) // 2

let fullstack = [
  [ 'HTML', 'CSS' , 'JAVASCRIPT'],
  ['JAVA','SPRINGBOOT', 'POSTGRESQL'],
]

console.log(fullstack)

let [frontEnd,backend] = fullstack;
let [lenguaje1,lenguaje2,lenguaje3] = frontEnd
  console.log(lenguaje3)

console.log(frontEnd)
console.log(backend)

let myArray2 = [1,2,3]

let [,num7,num8] = myArray2
console.log(num7) // 2
console.log(num8) // 3



// Sintaxis objectos


let person = {
    nombre: "Diego",
    age: 37,
    alias: "DiegoGiraldo"
}


let {age,nombre,alias} =person

console.log(nombre)
console.log(age)
console.log(alias)

let {nombre: nom, age: edad, alias: apodo , email = 'dgiraldoza@cesde.net'} = person
console.log(nom,edad,apodo, email)


let person2 ={
  nombre2: 'Juan',
  altura : 1.80,
  edad: 38,
  trabajo: {
    empresa: 'Google',
    cargo: 'Desarrollador'
  }
}

let {nombre2, trabajo: {empresa, cargo}} = person2
console.log(nombre2)
console.log(empresa)
console.log(cargo)



// Desestructuración durante la iteración

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (let [country, city] of countries) {
  console.log(`La capital de ${country} es ${city}`);
}


function saludar({ nombre, edad }) {
  console.log(`Hola ${nombre}, y tengo ${edad} años`);
}

saludar({
  nombre: "Carlos",
  edad: 28
});



function saludar({ nombre, edad }) {
  console.log(`Hola ${nombre}, tienes ${edad}`);
}

saludar({
  nombre: "Carlos",
  edad: 28
});
*/
// Propagación-Spread (...)

// Sintaxis arrays

let myArray= [1,2,3,4,5,6,7,8,9,10]
let [num1,num2,num3, ...resto] = myArray
console.log(num1,num2,num3)
console.log(resto)

let myArray2 =[11,12,13]

let numeros = [...myArray,...myArray2]
console.log(numeros)

let myArra3 = [9,10,...myArray2,14,15,16]

console.log(myArra3)




// Sintaxis objects


let person = {
    nombre: "Diego",
    age: 37,
    alias: "DiegoGiraldo"
}

let persona3 = {...person, email: 'dgiraldoza@cesde.net'}
console.log(persona3)


//spred en funciones flecha

let sumar =(...numeros) => {
  let resultado = 0;
  for (let numero of numeros) {
    resultado += numero
  }
  return resultado;
}

console.log(sumar(1,2,8,10, 100,50))
