/*Ejercicio 4: Evaluador de Paridad y Módulo
Solicite al usuario un número entero. Utilizando operadores aritméticos de residuo, 
determine si el número es par o impar. El programa debe mostrar unmensaje booleano 
o textual indicando el resultado.*/

const readline = require("readline");
//Entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número entero: ", (numero) => {

    numero = parseInt(numero);
//Proceso

    if (numero % 2 === 0) {
//Salida 1
        console.log("El número es PAR");
    } else {
//Salida 2
        console.log("El número es IMPAR");
    }

    rl.close();
});
