/* •	Ejercicio 7: Simulador de Descuentos por Categoría Desarrolle un programa que 
reciba el monto total de una compra y la categoría del cliente (A, B o C). Si es categoría A, 
aplique el 15% de descuento; si es B, el 10%; y si es C, el 5%. Si se introduce otra categoría, 
indique que no aplica descuento. Use sentencias condicionales.*/

//Entrada
const readline = require("readline/promises");

async function calcularcompra() {

    let monto;
    let categoria;
    let descuento;

    let interfazcapture = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const montoInput = await interfazcapture.question("Ingrese el monto total de la compra: ");
    monto = parseFloat(montoInput);

    const categoriaInput = await interfazcapture.question("Ingrese la categoria del cliente (A, B o C): ");
    categoria = categoriaInput;
//Proceso
    if (categoria === "A" || categoria === "a") {
        descuento = monto * 0.85;

    } else if (categoria === "B" || categoria === "b") {
        descuento = monto * 0.90;

    } else if (categoria === "C" || categoria === "c") {
        descuento = monto * 0.95;

    } else {
        console.log("No aplica descuento");
        descuento = monto;
    }
//Salida
    console.log("Cliente de categoria: " + categoria);
    console.log("Monto total de la compra: " + monto);
    console.log("El monto final a pagar es: " + descuento);

    interfazcapture.close();
}

calcularcompra();