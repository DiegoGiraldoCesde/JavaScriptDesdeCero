/*tengoHambre = true;
tengoComida = false;
tengoPlata = false;

if (tengoHambre && tengoComida) {
    console.log("Tengo hambre, tengo comida, voy a comer")
} 
else if (tengoHambre && tengoComida || tengoPlata) {
    console.log("Tengo hambre, no tengo comida pero si tengo plata, voy a comer algo afuera")
}
else {
    console.log("No puedo comer")
}*/

let dia = 8;
//let diaElegido = "Lunes";

switch (dia) {
    case 0:
        console.log("Hoy es Domingo");
        break;
    case 1:
        console.log("Hoy es Lunes");
        break;
    case 2:
        console.log("Hoy es Martes");
        break;
    case 3:
        console.log("Hoy es Miércoles");
        break;
    case 4:
        console.log("Hoy es Jueves");
        break;
    case 5:
        console.log("Hoy es Viernes");
        break;
    case 6:
        console.log("Hoy es Sábado");
        break;
    default:
        console.log("Día no válido");
}