let suma = 0;
let contador = 0;

let input = prompt("Ingrese un número (0 para terminar):");
let numero = Number(input);

while (numero !== 0) {
    if (!isNaN(numero)) {
        suma += numero;
        contador++;
    } else {
        console.log("Por favor ingrese un número válido");
    }

    input = prompt("Ingrese otro número (0 para terminar):");
    numero = Number(input);
}

// Evitar división entre 0
if (contador > 0) {
    const promedio = suma / contador;
    console.log(`Suma total: ${suma}`);
    console.log(`Promedio: ${promedio}`);
} else {
    console.log("No se ingresaron números válidos");
}