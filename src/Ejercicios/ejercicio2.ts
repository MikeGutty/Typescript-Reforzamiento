const numero1 = Number(prompt("Ingrese el primer número:"));
const numero2 = Number(prompt("Ingrese el segundo número:"));

const operacion = prompt("Ingrese la operación a realizar (+, -, *, /):");

switch (operacion) {
    case "+":
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case "-":
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    case '*':
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;
    case '/':
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    default:
        console.log('Operación no válida');
}