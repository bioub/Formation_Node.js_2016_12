const express = require('express');

const server = express();

server.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

server.get('/', (req, res, next) => {
    res.send('<h2>Accueil</h2>');
});

server.get('/contacts', (req, res, next) => {
    res.send('<h2>Liste des contacts</h2>');
});

server.get('/contacts/:id', (req, res, next) => {
    var id = parseInt(req.params.id);

    if (Number.isNaN(id)) {
        return next();
    }

    res.send('<h2>Liste des contacts</h2>');
});

server.use((req, res, next) => {
    res.statusCode = 404;
    res.send('<h2>404 Not Found</h2>');
});

server.listen(8080, () => {
    console.log('Le serveur a démarré sur le port 8080');
});
