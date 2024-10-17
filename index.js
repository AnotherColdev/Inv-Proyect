document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('crear-usuario-btn').addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value;
        const cedula = document.getElementById('cedula').value;
        const contrasena = document.getElementById('contrasena').value;

        console.log("Nombre del usuario:", nombre);
        console.log("Cédula del usuario:", cedula);
        console.log("Contraseña del usuario:", contrasena);
    });
});
