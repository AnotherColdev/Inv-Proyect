document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('crear-usuario-btn').addEventListener('click', function() {
        window.nombre_usuario_nuevo = document.getElementById('nombre').value;
        window.cedula_usuario_nuevo = document.getElementById('cedula').value;
        window.contrasena_usuario_nuevo = document.getElementById('contrasena').value;

        console.log("Nombre del usuario:", nombre);
        console.log("Cédula del usuario:", cedula);
        console.log("Contraseña del usuario:", contrasena);
    });
});

