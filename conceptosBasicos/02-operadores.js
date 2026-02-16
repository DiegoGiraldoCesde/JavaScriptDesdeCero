//Operadores Aritméticos

let a = 5
let b = 10

/*console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente*/


// Operadores unarios

/*/ Post-incremento: usa el valor (5) y LUEGO lo incrementa (a=6)
console.log(a++); // Muestra: 5 
console.log(a) // Muestra: 6

// Pre-incremento: incrementa el valor (b=10) y LUEGO lo usa
console.log(++b); // Muestra: 11

// Post-decremento: usa el valor (b=11) y LUEGO lo decrementa (b=10)
console.log(b--); // Muestra: 11
console.log(b) // Muestra: 10

// Pre-decremento: decrementa el valor (b=10) y LUEGO lo usa
console.log(--b); // Muestra: 9


// Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 4 // Suma con asignación
console.log(myVariable)

myVariable -= 4 // Resta con asignación
console.log(myVariable)
myVariable *= 4 // Multiplicación con asignación
console.log(myVariable)
myVariable /= 4 // División con asignación
console.log(myVariable)
myVariable %= 4 // Módulo con asignación
console.log(myVariable)
myVariable **= 4 // Exponente con asignación
console.log(myVariable)


/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías */


// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = false
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo") 

/* Ejercicios

1. Crea una variable para cada operación aritmética

2. Crea una variable para cada tipo de operación de asignación,
    que haga uso de las variables utilizadas para las operaciones aritméticas

3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

5. Utiliza el operador lógico and

6. Utiliza el operador lógico or

7. Combina ambos operadores lógicos

8. Añade alguna negación

9. Utiliza el operador ternario

10. Combina operadores aritméticos, de comparáción y lógicas */