const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const entierAlea = Math.floor(Math.random() * 101);
const essais = [];

const jouer = function() {

    if (essais.length) {
        console.log('Vous avez déjà joué : ' + essais.join(', '))
    }

    rl.question('Saisir un entier entre 0 et 100 : ', function(answer) {

        const entierSaisi = Number.parseInt(answer);

        if (Number.isNaN(entierSaisi)) {
            console.log('Il faut saisir un entier');
            return jouer();
        }

        essais.push(entierSaisi);

        if (entierSaisi < entierAlea) {
            console.log('Trop petit');
            return jouer();
        }

        if (entierSaisi > entierAlea) {
            console.log('Trop grand');
            return jouer();
        }

        console.log('Gagné !!!!');
        rl.close();
    });

};

jouer();
