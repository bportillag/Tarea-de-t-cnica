/* Ejercicio 1: Cálculo de Presupuesto Automatizado
Diseñe un programa que reciba el presupuesto total de un proyecto tecnológico.
Sabiendo que el 45% se destina a desarrollo, el 35% a diseño y el 20%
a marketing, el programa debe calcular y mostrar en pantalla el dinero
exacto asignado a cada área.
*/

// Entrada de datos
const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Hola, bienvenido a su calculadora de presupuesto");

entrada.question("Ingrese la cantidad de sus presupuesto: ", function(presupuesto) {

    // Proceso
    var desarrollo = presupuesto * (45 / 100);
    var diseño = presupuesto * (35 / 100);
    var marketing = presupuesto * (20 / 100);

    // Salida de datos
    console.log("El presupuesto destinado a desarrollo es: " + desarrollo + "$");
    console.log("El presupuesto destinado a diseño es: " + diseño + "$");
    console.log("El presupuesto destinado a marketing es: " + marketing + "$");

    entrada.close();
});6500
