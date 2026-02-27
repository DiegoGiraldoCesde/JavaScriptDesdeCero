
let nombres = ["Ana", "Luis", "Pedro"];

/*document.write("Lista original: " + nombres + "<br>");

// Agregar
nombres.push("María");
document.write("Después de agregar: " + nombres + "<br>");

// Eliminar último
nombres.pop();
document.write("Después de eliminar: " + nombres + "<br>");

// Cambiar valor
nombres[1] = "Carlos";
document.write("Después de cambiar: " + nombres + "<br>");

// Mostrar uno
document.write("Primer nombre: " + nombres[0] + "<br>");*/

/////////////////////////////////////////////////

//### Operaciones básicas con arrays###

//Tamaño

document.write(nombres.length);

// Recorrer con for
for (let i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + "<br>");
}

// Recorrer con for...of

/*for (let nombre of nombres) {
    document.write(nombre + "<br>");
}*/

/* Agregar y eliminar elementos

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

let numeros = [2, 4, 6];

numeros.unshift(1); // [1,2,4,6]
numeros.shift();    // [2,4,6]*/

if (nombres.includes("Ana")) {
    document.write("Existe<br>");
}


let pos = nombres.indexOf("Luis");

document.write(pos);


myArray = [3]
myArray2 = new Array(3)

console.log(myArray) // [3]
console.log(myArray2) // 3

/* Crea un array con 5 ciudades.
Muestra todas con for.
Agrega una ciudad nueva.
Elimina la primera.
Cambia la tercera.
Pide nombres hasta escribir "fin" (do...while).
Guarda los nombres en un array.
Muestra cuántos hay.
Busca uno con prompt. Di si existe o no. */


