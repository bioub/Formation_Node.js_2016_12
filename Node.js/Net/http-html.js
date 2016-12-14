const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<p><b>Hello</b></p>');
    res.end('<p>Bye</p>');
});

server.listen(8080, () => {
    console.log('Le serveur a démarré sur le port 8080');
});

/*
{
    url: '/',
    method: 'GET',
    callback: (req, res) => {
    }
}
    */