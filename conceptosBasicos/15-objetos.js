// Objeto en JavaScript
// Un objeto es una colección de propiedades, 
// donde cada propiedad es una asociación entre un nombre (clave) y un valor.


// Creación de un objeto -- Sintaxis

let persona = {
    nombre: "Diego",
    edad: 31,
    ciudad: "Rionegro"
};


// Acceso a las propiedades de un objeto

console.log(persona.nombre); //Con notación de punto
console.log(persona["edad"]); //Con notación de corchetes

// Modificación de las propiedades de un objeto
persona.ciudad = "Rionegro";
console.log(persona.ciudad);


// Agregar nuevas propiedades a un objeto

persona.profesion = "Desarrollador";
console.log(persona.profesion);

// Eliminar propiedades de un objeto
delete persona.edad;
console.log(persona.edad); 


// Verificar si una propiedad existe en un objeto
console.log("nombre" in persona);


// Recorrer las propiedades de un objeto

for (let propiedad of persona) {
    console.log(propiedad);  // Esto no funciona, ya que persona no es iterable
}



for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}


// Comparar objetos
let persona2 = {
    nombre: "Diego",
    edad: 31,
    ciudad: "Rionegro"
};

console.log(persona);
console.log(persona2);

console.log(persona.ciudad === persona2.ciudad);


console.log(JSON.stringify(persona) === JSON.stringify(persona2)); //Le paso mi objeto a Json y luego comparo strings.

// Obtener todas las claves de un objeto
console.log(Object.keys(persona));

// Obtener todos los valores de un objeto
console.log(Object.values(persona));

// Obtener todas las entradas (clave-valor) de un objeto
console.log(Object.entries(persona));

// Clonar un objeto
let personaClonada = Object.assign({}, persona);
console.log(personaClonada);



/* Métodos de objetos
 Un método es una función que es propiedad de ese objeto que estamos definiendo. 
Se puede definir dentro del objeto para realizar acciones relacionadas 
con ese objeto.
// */

let persona3 = {
    nombre: "Ana",
    edad: 25,
    caminar: function() {
        console.log(`Hola, soy ${this.nombre} y estoy caminando.`);
    },
    trabajo : {
        empresa: "Tech Company",  //puedo crear un nuevo objeto dentro de este objeto
        puesto: "Desarrolladora"    
    }
};
console.log(persona3.trabajo.empresa);
persona3.caminar(); // Hola, soy Ana y estoy caminando.