/*Ejercicio 5: Sistema de Alerta de Inventario (Operadores Lógicos)
Un almacén necesita un sistema que dispare una alerta de reabastecimiento. El programa debe solicitar la cantidad 
Actual de un producto y sus diasParaVencer. La alerta se activa (true) si la cantidad
 es menor a 10 unidades O si los días para vencer son menores a 3. Use operadores 
 lógicos.*/

 const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Entrada
entrada.question("Ingrese la cantidad actual: ", (cantidadActual) => {
    entrada.question("Ingrese los dias para vencer: ", (diasParaVencer) => {
//Proceso
        const alerta = Number(cantidadActual) < 10 || Number(diasParaVencer) < 3;
//Salida
        console.log("¿Alerta de reabastecimiento?: " + alerta);

        entrada.close();
    });
});