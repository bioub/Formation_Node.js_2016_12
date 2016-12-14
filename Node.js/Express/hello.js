const express = require('express');

const server = express();

// all => toutes les méthodes HTTP
server.all('/', (req, res, next) => {
   res.send('<b>hello</b>'); // réponse HTML
});

// get => méthode HTTP get (idem pour les autres, post...)
server.get('/contacts', (req, res, next) => {
    res.json([{prenom: 'Romain'}]); // redirection
});

// get => méthode HTTP get (idem pour les autres, post...)
server.get('/hello/:prenom', (req, res, next) => {
    res.send(`<b>Bonjour ${req.params.prenom}</b>`);
});


server.listen(8080, () => {
    console.log('Le serveur a démarré sur le port 8080');
});
