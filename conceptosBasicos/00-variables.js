//Comentario en una línea.
/*aqui 
lo que vamos a hacer a hacer
es programar*/

console.log("hola mundo") //imprime en consola el mensaje entre comillas

/*Variables: son espacios en memoria donde se almacena un valor, 
 el cual puede ser modificado a lo largo del programa. 
 En JavaScript existen tres formas de declarar variables: var, let y const.*/

var nombre = "Diego"// no recomendado
console.log(nombre)

let apellido = "Giraldo" // recomendado para variables que pueden cambiar su valor
console.log(apellido)

const segundoApellido = "zapata"
console.log(segundoApellido)

segundoApellido = "lopez"// no se puede reasignar el valor de una constante
console.log(segundoApellido)