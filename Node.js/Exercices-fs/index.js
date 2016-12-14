const logger = require('./logger');
const loggerAsync = require('./logger-async');
const loggerPromise = require('./logger-promise');
const path = require('path');

logger.file = path.resolve(__dirname, 'app.log');

// 1 - Synchrone
logger.log('Un message');
logger.reset(); // supprime le fichier

// 2 - Réécrire de manière asynchrone
/*
loggerAsync.log('Un message', err => {
    if (err) {
        console.log(err);
    }
    loggerAsync.reset(err => {
        if (err) {
            console.log(err);
        }
    });
});
*/

// 3 - npm install fs-promise
// réécrire avec des promesses
loggerPromise.log('Un message')
    .then(() => loggerPromise.reset())
    .then(() => console.log('OK'))
    .catch(console.log);