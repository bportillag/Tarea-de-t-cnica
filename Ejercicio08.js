
/*Ejercicio 8: Validador de Notas con Rango
Escriba un algoritmo que reciba la nota final de un estudiante (de 0 a 10). Usando condicionales anidados, 
determine si está "Reprobado" (menos de 7),"Bueno" (entre 7 y 8.9), o "Excelente" (9 a 10). Si la nota está 
fuera del rango 0-10, debe mostrar un mensaje de error.*/

//Entrada
const readline = require("readline/promises");

async function validarNota() {

    const interfazcapture = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const notaInput = await interfazcapture.question(
        "Ingrese la nota final del estudiante (de 0 a 10): "
    );

    let nota = parseFloat(notaInput);
//Proceso
    while (nota < 0 || nota > 10) {
        console.log("Error: La nota debe estar en el rango de 0 a 10.");

        const notaInput = await interfazcapture.question(
            "Ingrese la nota final del estudiante (de 0 a 10): "
        );

        nota = parseFloat(notaInput);
    }
//Salida
    if (nota < 7) {
        console.log("El estudiante está Reprobado. Con la nota de: " + nota);

    } else if (nota >= 7 && nota < 9) {
        console.log("El estudiante aprueba con una calificación Buena. Con la nota de: " + nota);

    } else {
        console.log("El estudiante aprueba con una calificación Excelente. Con la nota de: " + nota);
    }

    interfazcapture.close();
}

validarNota();
