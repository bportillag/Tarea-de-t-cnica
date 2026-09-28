/*Ejercicio 10: Contador de Números Positivos
Diseñe un algoritmo que pida números al usuario de forma repetitiva. El ciclo debe detenerse inmediatamente
 cuando el usuario introduzca un número negativo. Al finalizar, el programa debe mostrar cuántos números
positivos se ingresaron en total.*/

const prompt = require('prompt-sync')();

// ENTRADA
let num;
let contador = 0;

// PROCESO
while (true) {
    num = parseInt(prompt("Ingrese un número:"));

    if (num < 0) {
        break;
    }

    if (num > 0) {
        contador++;
    }
}

// SALIDA
console.log("Cantidad de números positivos: " + contador);
