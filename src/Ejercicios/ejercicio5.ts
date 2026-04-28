const input = prompt("Ingrese un número entero positivo:");
const numero = Number(input);

if (isNaN(numero) || numero <= 0) {
    console.log("Ingrese un número válido y positivo");
} else {
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);

        if (resultado % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log(`Resultados pares: ${pares}`);
    console.log(`Resultados impares: ${impares}`);
}