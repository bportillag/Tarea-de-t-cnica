/* Ejercicio 3: Cálculo de Salario Neto
Lea el nombre de un empleado, las horas trabajadas en el mes
y el valor de la hora. Calcule el salario bruto y aplique
un descuento fijo del 9.35% por seguridad social.
*/

// Entrada de datos
const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const socialSEQ = 9.35 / 100;

console.log("Bienvenido a su calculadora de salario neto");

entrada.question("Nombre: ", function(name) {
    entrada.question("Horas de trabajo al mes: ", function(horas) {
        entrada.question("Valor de la hora: ", function(valorH) {

            // Proceso
            var salBruto = Number(horas) * Number(valorH);
            var descuento = salBruto * socialSEQ;
            var salNeto = salBruto - descuento;

            // Salida
            const verde = "\x1b[32m";
const azul = "\x1b[34m";
const amarillo = "\x1b[33m";
const rojo = "\x1b[31m";
const reset = "\x1b[0m";

console.log(
    "\x1b[36mHola " + name + ", este es el resumen de su salario:\x1b[0m\n" +
    "Horas trabajadas en el mes: " + horas + "\n" +
    "Valor de la hora: $" + Number(valorH).toFixed(2) + "\n" +
    "Salario bruto: $" + salBruto.toFixed(2) + "\n" +
    "\x1b[31mDescuento de seguridad social (9,35%): $" + descuento.toFixed(2) + "\x1b[0m\n" +
    "\x1b[32mSalario neto a recibir: $" + salNeto.toFixed(2) + "\x1b[0m"
);

            entrada.close();
        });
    });
});
