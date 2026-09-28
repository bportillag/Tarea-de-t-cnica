/*Ejercicio 2: Conversor de Unidades de Almacenamiento 
Escriba un programa que solicite al usuario una cantidad de almacenamiento expresada en
Gigabytes (GB) y calcule su equivalente exacto en Megabytes (MB) y en Kilobytes (KB).
*/

// Entrada de datos
const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 console.log("Hola, bienvenido a su conversor de unidades de almacenamiento");

 entrada.question("Ingrese la cantidad de sus GB: ", function(cantidadGB) {
    
    //Proceso
    var cantidadMB = cantidadGB * 1024;
    var cantidadKB = cantidadGB * 1048576;

    //Salida de datos
    console.log("Sus MG son: " + cantidadMB + " MB");
    console.log("Sus KB son: " + cantidadKB  + " KB");
    entrada.close();
 });





