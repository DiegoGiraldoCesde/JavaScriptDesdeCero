// Clases en JavaScript
// Las clases en JavaScript son una forma de crear objetos
//  y manejar la herencia de manera más sencilla 
// y estructurada.

/*

## Qué es un objeto ##

Es una estructura que contiene propiedades, esas propiedades lo describe y lo define, 
y los métodos son las acciones que hacen los objetos.

Entonces, cuando creamos objetos, los creamos con una 
estructura clave valor con unos datos dentro que 
llamamos propiedades.

Clase

Se puede decir que es un objeto pero con una peculariedad.
Las clases son como una plantilla que nos nos ayuda a crear más objetos, 
"definimos las propiedades y metodos pero no les damos 
valores".

Me permite reutilizar una extructura.

Instancias-- usar ese objeto
*/


//Cómo defino una clase (sintaxis) 

class Persona {
     
    constructor(nombre, edad) {   //El constructor es un método especial que me permite definir la estructura de mi clase.
        this.nombre = nombre;
        this.edad = edad;
        
    }   
    saludar() {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
    
}

// Creación de una instancia de la clase (crear un objeto a partir de la clase)


let juanPersona = new Persona("Juan", 30);

console.log(juanPersona.edad)
juanPersona.saludar()
juanPersona.nombre = "Juan Pérez"; // Modificar la propiedad nombre
juanPersona.profesion = "Ingeniero"; // Agregar una nueva propiedad profesion
console.log(juanPersona.nombre);


console.log(typeof Persona)  


// valores por defecto

class Persona2 {
     
    constructor(nombre = "usuario", edad = "la edad justa") {  //Aquí le estoy poniendo valores por defecto a los parametros.
        this.nombre = nombre;
        this.edad = edad;
        
    }   
    saludar() {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad);
    }
    
}

//acceder a las propiedades de la clase

console.log(juanPersona.nombre); // Juan
console.log(juanPersona.edad); // 30


//propiedades privadas
class Persona3 {
    #nombre //propiedad privada
    #cuentaBancaria; 
    constructor(nombre, edad, cuentaBancaria) {
        this.#nombre = nombre;
        this.edad = edad;
        this.#cuentaBancaria = cuentaBancaria;
    }
    saludar() {
        console.log("Hola, mi nombre es " + this.#nombre + " y tengo " + this.edad + " años.");
    }
    pago() {
        console.log("Mi cuenta bancaria es " + this.#cuentaBancaria);
    } 
}

//Persona3.pago() // No se puede acceder a la propiedad privada desde fuera de la clase

//Para poder acceder a las propiedades privadas deberiamos crear metodos setters y getters.


class Persona4 {
    #nombre //propiedad privada
    #cuentaBancaria; 
    constructor(nombre, edad, cuentaBancaria) {
        this.#nombre = nombre;
        this.edad = edad;
        this.#cuentaBancaria = cuentaBancaria;
    }
    saludar() {
        console.log("Hola, mi nombre es " + this.#nombre + " y tengo " + this.edad + " años.");
    }
    pago() {
        console.log("Mi cuenta bancaria es " + this.#cuentaBancaria);
    } 
    getNombre() {
        return this.#nombre;
    }
    set cuentaBancaria(cuenta) {
        this.#cuentaBancaria = cuenta;
    }
    get cuentaBancaria() {
        return this.#cuentaBancaria;
    }
}

let persona4 = new Persona4("Maria", 28, "123456789");
console.log(persona4.getNombre()); // Maria
console.log(persona4.cuentaBancaria); // 123456789
persona4.cuentaBancaria = "987654321";
console.log(persona4.cuentaBancaria); // 987654321



// Métodos estáticos
// Los métodos estáticos son aquellos que pertenecen a la clase en sí misma, 
// y no a las instancias de la clase. Se pueden llamar sin necesidad de crear una instancia de la clase.

class Matematica {
    static sumar(a, b) {
        return a + b;
    }
    static restar(a, b) {
        return a - b;
    }
}

// como lo hacía antes? 
// let resultadoSuma = Matematica.sumar(5, 3);

console.log(Matematica.sumar(5, 3)); // 8
console.log(Matematica.restar(5, 3)); // 2

// Herencia de clases

class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this.carrera = carrera;
    }
    estudiar() {
        console.log("Hola, mi nombre es " + this.nombre + " y estudio " + this.carrera);
    }
    saludar() {
        console.log("Hola, mi nombre es " + this.nombre + " y estudio " + this.carrera); // Sobrescribo el método saludar de la clase Persona
    }
}




let estudiante1 = new Estudiante("Ana", 25, "Ingeniería de Sistemas");
estudiante1.saludar(); 
estudiante1.estudiar(); 

// Ejercicio práctico

// Crea una clase llamada "Libro" con las siguientes propiedades: título, 
// autor, año de publicación y género. Luego, crea un método dentro de la 
// clase que imprima una descripción completa del libro utilizando sus
//  propiedades.

class Libro {
    constructor(titulo, autor, anoPublicacion, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacion = anoPublicacion;
        this.genero = genero;
    }
    descripcion() {
        console.log("El libro '" + this.titulo + "' fue escrito por " + this.autor + " en el año " + this.anoPublicacion + " y pertenece al género " + this.genero + ".");
    }
}

let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "Realismo mágico");
libro1.descripcion(); 
