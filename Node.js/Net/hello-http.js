const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello');
});

server.listen(8080, () => {
    console.log('Le serveur écoute sur le port 8080');
});
