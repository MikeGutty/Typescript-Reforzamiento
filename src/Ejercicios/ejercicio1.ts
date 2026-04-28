const nota = Number(prompt("Ingrese la nota del estudiante:") ?? "");

if (isNaN(nota)) {
    console.log("Por favor, ingrese un número válido.");
} else if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70 && nota <= 89) {
    console.log("Bueno");
} else if (nota >= 50 && nota <= 69) {
    console.log("Regular");
} else if (nota <= 49) {
    console.log("Reprobado");
}