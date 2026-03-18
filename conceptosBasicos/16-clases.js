// Clases en JavaScript
// Las clases en JavaScript son una forma de crear objetos y manejar 
// la herencia de manera más sencilla y estructurada.


/*

## Qué es un objeto ##

Es una estructura que contiene propiedades, esas propiedades lo describe y lo define, 
y los métodos son las acciones que hacen los objetos.

Entonces, cuando creamos objetos, los creamos con una estructura clave valor con unos datos dentro que 
llamamos propiedades.

Clase

Se puede decir que es un objeto pero con una peculariedad.
Las clases son como una plantilla que nos nos ayuda a crear más objetos, 
"definimos las propiedades y metodos pero no les damos valores".

Me permite reutilizar una extructura.

Instancias-- usar ese objeto
*/

// Definición de una clase

class Persona {
    constructor(nombre, edad) { //El constructor es un método especial que me permite definir la estructura de mi clase.
        this.nombre = nombre;
        this.edad = edad;
    }   
    saludar() {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
}

// Creación de una instancia de la clase (crear un objeto a partir de la clase)

console.log(typeof Persona)  

// valores por defecto

//acceder a las propiedades de la clase


class Persona2 {
    constructor(nombre, edad) { //El constructor es un método especial que me permite definir la estructura de mi clase.
        this.nombre = nombre;
        this.edad = edad;
    }   
    saludar() {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
}


//propiedades privadas
class Persona3 {
    #nombre; //propiedad privada
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log("Hola, mi nombre es " + this.#nombre + " y tengo " + this.edad + " años.");
    }
}


// Herencia de clases
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this.carrera = carrera;
    }
    estudiar() {
        console.log("Hola, mi nombre es " + this.nombre + " y estudio " + this.carrera);
    }
}

let estudiante1 = new Estudiante("Ana", 25, "Ingeniería de Sistemas");
estudiante1.saludar(); // Hola, mi nombre es Ana y tengo 25 años.
estudiante1.estudiar(); // Hola, mi nombre es Ana y estudio Ingeniería de Sistemas.

// Ejercicio práctico
// Crea una clase llamada "Libro" con las siguientes propiedades: título, autor, año de publicación y género. Luego, crea un método dentro de la clase que imprima una descripción completa del libro utilizando sus propiedades.
class Libro {
    constructor(titulo, autor, añoPublicacion, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.añoPublicacion = añoPublicacion;
        this.genero = genero;
    }
    descripcion() {
        console.log("El libro '" + this.titulo + "' fue escrito por " + this.autor + " en el año " + this.añoPublicacion + " y pertenece al género " + this.genero + ".");
    }
}

let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "Realismo mágico");
libro1.descripcion(); // El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en el año 1967 y pertenece al género Realismo mágico.
// Reto
// Crea una clase llamada "Película" con las siguientes propiedades: título, director, año de estreno y género. Luego, crea un método dentro de la clase que imprima una descripción completa de la película utilizando sus propiedades.
class Pelicula {
    constructor(titulo, director, añoEstreno, genero) {
        this.titulo = titulo;
        this.director = director;
        this.añoEstreno = añoEstreno;
        this.genero = genero;
    }   
    descripcion() {
        console.log("La película '" + this.titulo + "' fue dirigida por " + this.director + " y se estrenó en el año " + this.añoEstreno + ". Pertenece al género " + this.genero + ".");
    }
}

let pelicula1 = new Pelicula("El padrino", "Francis Ford Coppola", 1972, "Crimen");
pelicula1.descripcion(); // La película 'El padrino' fue dirigida por Francis Ford Coppola y se estrenó en el año 1972. Pertenece al género Crimen.

// Ejercicio práctico
// Crea una clase llamada "Animal" con las siguientes propiedades: nombre, especie y edad. Luego, crea un método dentro de la clase que imprima una descripción completa del animal utilizando sus propiedades.
class Animal {
    constructor(nombre, especie, edad) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
    }
    descripcion() {
        console.log("El animal se llama " + this.nombre + ", es un " + this.especie + " y tiene " + this.edad + " años.");
    }
}

let animal1 = new Animal("Firulais", "Perro", 5);
animal1.descripcion(); // El animal se llama Firulais, es un Perro y tiene 5 años.

