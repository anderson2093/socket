var socket = io();
// on es para escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Anderson Cusma',
    mensaje: 'Provando sockets'
        // Realizar un callback para confirmar que todo salio bien 
}, function(resp) {
    console.log('Respuesta del servidor', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(message) {
    console.log('Servidor: ', message);
});