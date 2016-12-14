const net = require('net');

const server = net.createServer(c => {
    console.log('Client connecté');
    c.on('end', () => {
        console.log('Client déconnecté');
    });
    c.write('Hello');
    c.pipe(c);
});

server.listen(1530, () => {
    console.log('Le serveur écoute sur le port 1530');
});
