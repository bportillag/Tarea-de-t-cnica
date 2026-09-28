/*Ejercicio 6: Verificación de Acceso de Seguridad
Cree un algoritmo para un banco que evalúe si un usuario puede retirar dinero de un 
cajero de alta seguridad. El acceso se concede únicamente si el usuariointroduce la 
claveCorrecta (un valor numérico) Y si posee un tokenActivo (un valor booleano).*/

const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Entrada
entrada.question("Ingrese la clave: ", (claveIngresada) => {

    const claveCorrecta = 1234;
    const tokenActivo = true;
//Proceso
    const acceso = Number(claveIngresada) === claveCorrecta && tokenActivo === true;
//Salida
    console.log("¿Acceso concedido?: " + acceso);

    entrada.close();
});
