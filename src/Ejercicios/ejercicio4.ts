let claveCorrecta = "Java2024";
let claveIngresada: string | null;
let intentos = 0;

do {
    claveIngresada = prompt("Ingrese la contraseña:");
    intentos++;

    if (claveIngresada !== claveCorrecta) {
        console.log("Contraseña incorrecta");
    }

} while (claveIngresada !== claveCorrecta);

console.log(`Acceso concedido en ${intentos} intento(s)`);