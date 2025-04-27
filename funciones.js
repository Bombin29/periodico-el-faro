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