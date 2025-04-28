// Actualización de Fecha y Hora en Vivo
function actualizarFechaHora() {
    const fechaHora = document.getElementById("fecha-hora");
    const ahora = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = ahora.toLocaleDateString('es-ES', opcionesFecha);
    const hora = ahora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    fechaHora.innerHTML = `<strong>${fecha}</strong> - <span class="tag is-info">${hora}</span>`;
}

// Actualiza cada segundo
setInterval(actualizarFechaHora, 1000);
actualizarFechaHora(); // Ejecución inicial



// Carga Dinámica de Artículos
document.getElementById("formulario-articulo").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recargar la página

    const titulo = document.getElementById("titulo-articulo").value;
    const contenido = document.getElementById("contenido-articulo").value;

    if (titulo && contenido) {
        const nuevoArticulo = document.createElement("div");
        nuevoArticulo.classList.add("card"); // Aplicamos Bulma
        nuevoArticulo.innerHTML = `
            <div class="card-content">
                <p class="title is-4">${titulo}</p>
                <p>${contenido}</p>
            </div>
        `;
        
        document.getElementById("contenedor-articulos").appendChild(nuevoArticulo);
        actualizarContador(); // Actualiza el contador de artículos

        // Limpiar los campos
        document.getElementById("titulo-articulo").value = "";
        document.getElementById("contenido-articulo").value = "";
    }
});



// Contador de Artículos
function actualizarContador() {
    const cantidadArticulos = document.querySelectorAll("#contenedor-articulos .card").length;
    document.getElementById("contador-articulos").innerHTML = `<strong>Total de artículos:</strong> <span class="tag is-primary">${cantidadArticulos}</span>`;
}



// Formulario de Contacto con Feedback Mejorado
document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre-contacto").value;
    const mensaje = document.getElementById("mensaje-contacto").value;

    if (nombre && mensaje) {
        const mensajeConfirmacion = document.getElementById("mensaje-enviado");
        mensajeConfirmacion.style.display = "block";
        mensajeConfirmacion.innerHTML = `<strong>✅ ¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente.</strong>`;

        // Limpiar el formulario después del envío
        document.getElementById("nombre-contacto").value = "";
        document.getElementById("mensaje-contacto").value = "";

        // Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            mensajeConfirmacion.style.display = "none";
        }, 3000);
    }
});
