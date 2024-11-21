let nombre = prompt("Ingrese su nombre:");
let edad = prompt("Ingrese su edad:");
let ciudad = prompt("Ingrese su ciudad:");

// Mostrar mensaje de bienvenida con los datos del usuario
document.getElementById("mensaje").textContent = `Bienvenido ${nombre}, tienes ${edad} años y vives en ${ciudad}.`;

let diasVividos = edad * 365; // Aproximado sin contar años bisiestos
let mensajeDias = document.createElement("p");
mensajeDias.textContent = `Has vivido aproximadamente ${diasVividos} días.`;
document.body.appendChild(mensajeDias);
