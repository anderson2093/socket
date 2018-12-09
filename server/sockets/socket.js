const { io } = require('../server.js');

// Indica el estado de conexion del usuario
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvendido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        /* if (message.usuario) {
             callback({
                 resp: 'Todo salio bien!'
             });
         } else {
             callback({
                 resp: 'Todo salio mal!!!'
             });
         }*/
    });
});