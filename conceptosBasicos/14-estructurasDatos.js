/*### Estructuras de datos: Arrays

Un array es una estructura de datos que permite almacenar múltiples valores en una sola variable. Es una colección ordenada de elementos, donde cada elemento tiene un índice asociado que comienza en 0.


let nombres = ["Ana", "Luis", "Pedro"];

console.log(`Lista original: ${nombres}`);


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
console.log(subFrutas);


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
}

// Recorrer con for...of

for (let nombre of nombres) {
    console.log(nombre);
}


let myArray = [3,2,1]
let myArray2 = new Array(3)

console.log(myArray) // [3]
console.log(myArray2) // [undefined, undefined, undefined]



## Estructuras de datos: set

Set (conjunto) es una colección de elementos. Set sólo puede contener
 elementos únicos. 
Esto significa que no puede haber valores repetidos.

Si intentas agregar un valor que ya existe, JavaScript lo ignora.

Características principales de los Sets

    No permiten valores duplicados

    Mantienen el orden de inserción

    Pueden almacenar cualquier tipo de dato

    Permiten agregar, eliminar y verificar valores

    Se usan mucho cuando necesitamos:

    Eliminar duplicados

    Verificar si un elemento ya existe

    Manejar colecciones únicas



//Como crear un Set

let sinNada = new Set(); //Set vacio
console.log(sinNada);

//Set con valores iniciales
let numeros = new Set([1, 2, 3, 4]);
console.log(numeros);
console.log(numeros.size); //Tamaño del Set

//## Métodos más importantes ##

// .add() Agrega un valor al Set.


let frutas = new Set();

frutas.add("manzana");
frutas.add("pera");
frutas.add("naranja");

console.log(frutas);


// .has() Verifica si un valor existe en el Set.

console.log(frutas.has("Luis"));


// .delete() Elimina un valor del Set.

frutas.delete("naranja");
console.log(frutas);

// .size Propiedad que devuelve el número de elementos en el Set.

console.log(frutas.size);

// .clear() Elimina todos los elementos del Set.

frutas.clear();
console.log(frutas);

//Ejemplo práctico: Eliminar duplicados de un array usando 
// Set//Aquí paso el array a un Set 

 numeros = [1, 2, 3, 2, 4, 1, 5];
console.log(numeros);
let sinRepetidos = new Set(numeros)
console.log(sinRepetidos);


let ArrayNumeros = Array.from(sinRepetidos);
console.log(ArrayNumeros);


// Ejemplo práctico 2 (Verificar acceso)


let usuarios = new Set();

usuarios.add("Ana");
usuarios.add("Carlos");
usuarios.add("Laura");

if(usuarios.has("Luisa")){
    console.log("Usuario autorizado");
}else {
    console.log("Usuario no autorizado");
}

//Recorrer un Set

//Podemos usar for...of.

let colores = new Set(["rojo","verde","azul"]);

for(let color of colores){
    console.log(color);
}


// ### Estructuras de datos: Map (Diccionario) ###

/* Un Map es una estructura de datos que almacena información en pares 
clave → valor. Es una colección de elementos
donde cada elemento tiene una clave única y un valor asociado. 
A diferencia de los objetos, 
las claves en un Map pueden ser de cualquier tipo, incluyendo objetos, 
funciones o cualquier otro tipo de dato.


        clave → valor
        nombre → Juan
        edad → 25
        pais → Colombia

Características principales de los Maps:

    Permiten claves de cualquier tipo
    Mantienen el orden de inserción
    Pueden almacenar cualquier tipo de dato como valor
    Permiten agregar, eliminar y verificar pares clave-valor
    Se usan mucho cuando necesitamos:
    Almacenar datos con claves no string
    Mantener el orden de los elementos
    Manejar colecciones de datos con claves únicas

*/
//Cómo crear un Map 
let miMapa = new Map(); //Mapa vacío
console.log(miMapa);

//Mapa con valores iniciales
let persona = new Map([
    ["nombre", "Juan"],
    ["edad", 30],
    ["pais", "Colombia"]
]);
console.log(persona);   

//Métodos más importantes

// .set() Agrega o actualiza un par clave-valor en el Map.
persona.set("profesion", "Ingeniero");
console.log(persona);

persona.set("profesion", "Panadero");
console.log(persona);

// .get() Obtiene el valor asociado a una clave.
console.log(persona.get("edad")); 


console.log(persona.keys()) // Devuelve un iterable con las claves del Map
// .has() Verifica si una clave existe en el Map.
console.log(persona.has("edad"));

// .delete() Elimina un par clave-valor del Map.
persona.delete("pais");
console.log(persona);

// .size Propiedad que devuelve el número de pares clave-valor en el Map.
console.log(persona.size);

// .clear() Elimina todos los pares clave-valor del Map.
persona.clear();
console.log(persona);

//Ejemplo con Map: Almacenar información de un producto

let producto = new Map();

producto.set("nombre","Laptop");
producto.set("precio",2500);
producto.set("stock",15);

console.log(producto.get("precio"));

for(let [clave, valor] of producto){
    console.log(clave, valor);
}

/*
// Claves Set → colección sin duplicados
// Map → relación clave-valor
*/
