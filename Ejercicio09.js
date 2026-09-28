/*Ejercicio 9: Generador de Tablas de Multiplicar (Bucles)
Implemente un programa que solicite al usuario un número entero del 1 al 12. 
Utilizando una sentencia repetitiva (for o while), genere e imprima la tabla de
multiplicar de dicho número desde el 1 hasta el 12.*/

const prompt = require('prompt-sync')();

// ENTRADA
let num = parseInt(prompt("Ingrese un numero entero del 1 al 12: "));

// PROCESO
for (let i = 1; i <= 12; i++) {
    let resultado = num * i;

    // SALIDA
    console.log(num + " x " + i + " = " + resultado);
}
