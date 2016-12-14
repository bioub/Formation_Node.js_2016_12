const http = require('http');
const router = require('./router')

const server = http.createServer((req, res) => {
    router.dispatch(req, res);
});

server.listen(8080, () => {
    console.log('Le serveur a démarré sur le port 8080');
});
