// Strings (cadenas de texto)

// Concatenación

let myName = "Diego"
let saludo = "Hola, " + myName + "!"
console.log(saludo)
console.log(typeof saludo)

// Longitud

console.log(saludo.length)

// Acceso a caracteres

console.log(saludo[0])
console.log(saludo[11])

// Métodos comunes

console.log(saludo.toUpperCase()) // Mayúsculas
console.log(saludo.toLowerCase()) // Minúsculas
console.log(saludo.indexOf("Hola")) // Índice
console.log(saludo.indexOf("Diego"))
console.log(saludo.indexOf("Ricardo"))
console.log(saludo.includes("Hola")) // Incluye
console.log(saludo.includes("Diego"))
console.log(saludo.includes("Ricardo"))
console.log(saludo.slice(0, 10)) // Sección
console.log(saludo.replace("Diego", "Don Diego")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, estos
son
mis
ejercicios de JavaScript`
console.log(message)

// Interpolación de valores
let email = "dgiraldoza@cesde.net"
console.log(`Hola, ${myName}! Tu email es ${email}.`)

/*Ejercicios
1. Concatena dos cadenas de texto

2. Muestra la longitud de una cadena de texto

3. Muestra el primer y último carácter de un string

4. Convierte a mayúsculas y minúsculas un string

5. Crea una cadena de texto en varias líneas

6. Interpola el valor de una variable en un string

7. Reemplaza todos los espacios en blanco de un string por guiones

8. Comprueba si una cadena de texto contiene una palabra concreta

9. Comprueba si dos strings son iguales

10. Comprueba si dos strings tienen la misma longitud

*/