const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

const Jeu = function(options) {
    options = options || {};
    this.min = options.min || 0;
    this.max = options.max || 100;
    this.entierAlea = getRandomIntInclusive(this.min, this.max);
    this.essais = [];
};

Jeu.prototype.jouer = function() {

    if (this.essais.length) {
        console.log('Vous avez déjà joué : ' + this.essais.join(', '))
    }

    var that = this;

    rl.question('Saisir un entier entre ' + this.min + ' et ' + this.max + ' : ', function(answer) {

        const entierSaisi = Number.parseInt(answer);

        if (Number.isNaN(entierSaisi)) {
            console.log('Il faut saisir un entier');
            return that.jouer();
        }

        that.essais.push(entierSaisi);

        if (entierSaisi < that.entierAlea) {
            console.log('Trop petit');
            return that.jouer();
        }

        if (entierSaisi > that.entierAlea) {
            console.log('Trop grand');
            return that.jouer();
        }

        console.log('Gagné !!!!');
        rl.close();
    });

};

const jeu = new Jeu({
    min: 0,
    max: 100
});

jeu.jouer();