
let nombres = ["Ana", "Luis", "Pedro"];

console.log(`Lista original: ${nombres}`);

/*
 Metodos más usados

| Método    | Función          |
| --------- | ---------------- |
| push()    | Agrega al final  |
| pop()     | Borra último     |
| unshift() | Agrega al inicio |
| shift()   | Borra primero    |
| splice()   | Agrega o borra en cualquier posición |
| slice()    | Crea un nuevo array con una parte del original |
| indexOf()  | Busca un elemento y devuelve su índice |
| includes() | Verifica si un elemento existe en el array |


// Agregar al final
nombres.push("María");
console.log("Después de agregar: " + nombres);


// Eliminar último
nombres.pop();
console.log("Después de eliminar: " + nombres);


// Cambiar valor
nombres[1] = "Carlos";
console.log(`Después de cambiar: ${nombres}`);

// Mostrar uno
console.log(`Primer nombre: ${nombres[0]}`);

//splice() - Agregar o eliminar en cualquier posición

let frutas = ["manzana", "pera", "banano", "mango", "uva"];
/*console.log(`Listado de frutas: ${frutas}`);
frutas.splice(2, 0, "fresa", "kiwi");

console.log(frutas);


//slice() - Crear un nuevo array con una parte del original
let subFrutas = frutas.slice(1, 4);
console.log(`Array original: ${frutas}`);
console.log(subFrutas);*/


if (nombres.includes("Guillermo")) {
    console.log("Existe Guillermo en el array");
}else {
    console.log("No existe Guillermo en el array");
}


let pos = nombres.indexOf("Guillermo");

console.log(pos);

/////////////////////////////////////////////////

//### Operaciones básicas con arrays###

//Tamaño

console.log(nombres.length);

// Recorrer con for
/*for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}*/

// Recorrer con for...of

for (let nombre of nombres) {
    console.log(nombre);
}


let myArray = [3,2,1]
let myArray2 = new Array(3)

console.log(myArray) // [3]
console.log(myArray2) // [undefined, undefined, undefined]



