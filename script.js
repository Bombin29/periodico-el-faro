function actualizarFechaHora() {
    const fechaHora = document.getElementById("fecha-hora");
    const ahora = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = ahora.toLocaleDateString('es-ES', opciones);
    const hora = ahora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    fechaHora.textContent = `${fecha} - ${hora}`;
}

// Actualiza cada segundo
setInterval(actualizarFechaHora, 1000);

// Llamada inicial para que se vea sin esperar el primer intervalo
actualizarFechaHora();



document.getElementById("formulario-articulo").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recargar la página

    const titulo = document.getElementById("titulo-articulo").value;
    const contenido = document.getElementById("contenido-articulo").value;

    if (titulo && contenido) {
        const nuevoArticulo = document.createElement("div");
        nuevoArticulo.classList.add("noticia");
        nuevoArticulo.innerHTML = `<h3>${titulo}</h3><p>${contenido}</p>`;
        
        document.getElementById("contenedor-articulos").appendChild(nuevoArticulo);

        actualizarContador(); // Actualizar contador de artículos

        // Limpiar los campos
        document.getElementById("titulo-articulo").value = "";
        document.getElementById("contenido-articulo").value = "";
    }
});

function actualizarContador() {
    const cantidadArticulos = document.querySelectorAll("#contenedor-articulos .noticia").length;
    document.getElementById("contador-articulos").textContent = `Total de artículos: ${cantidadArticulos}`;
}



document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre-contacto").value;
    const mensaje = document.getElementById("mensaje-contacto").value;

    if (nombre && mensaje) {
        document.getElementById("mensaje-enviado").style.display = "block";

        // Limpiar el formulario después del envío
        document.getElementById("nombre-contacto").value = "";
        document.getElementById("mensaje-contacto").value = "";

        // Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            document.getElementById("mensaje-enviado").style.display = "none";
        }, 3000);
    }
});



function actualizarContador() {
    const cantidadArticulos = document.querySelectorAll(".noticia-container .noticia").length;
    document.querySelectorAll("#contador-articulos").forEach(contador => {
        contador.textContent = `Total de artículos: ${cantidadArticulos}`;
    });
}