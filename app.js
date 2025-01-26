// Declaro el Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Referencias a botones de la aplicación
const botonSortear = document.getElementById("botonSortear");
const botonNuevoJuego = document.getElementById("botonNuevoJuego");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarListaVisual();
    input.value = ""; // Limpia el campo de texto
}

// Función para actualizar la lista visualmente
function actualizarListaVisual() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpia la lista visual

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        ul.appendChild(li);
    });
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    // Deshabilita el botón de sorteo y habilita el de nuevo juego
    botonSortear.disabled = true;
    botonNuevoJuego.disabled = false;

    // Agrega estilos para reflejar la desactivación
    botonSortear.classList.add("disabled");
    botonNuevoJuego.classList.remove("disabled");
}

// Función para reiniciar el juego
function nuevoJuego() {
    listaAmigos = []; // Limpia el array
    document.getElementById("listaAmigos").innerHTML = ""; // Limpia la lista visual
    document.getElementById("resultado").innerHTML = ""; // Limpia el resultado
    document.getElementById("amigo").value = ""; // Limpia el campo de texto

    // Habilita el botón de sorteo y deshabilita el de nuevo juego
    botonSortear.disabled = false;
    botonNuevoJuego.disabled = true;

    // Agrega estilos para reflejar la activación
    botonSortear.classList.remove("disabled");
    botonNuevoJuego.classList.add("disabled");
}

