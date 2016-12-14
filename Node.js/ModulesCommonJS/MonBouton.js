const math = require('./math');

class MonBouton {
    constructor() {
        this.cpt = 0;
    }
    toString() {
        return `<button>${this.cpt}</button>`;
    }
    click() {
        this.cpt = math.increment(this.cpt);
    }
}

class MonChamp {
    constructor() {
        this.cpt = 0;
    }
    toString() {
        return `<button>${this.cpt}</button>`;
    }
    click() {
        this.cpt = math.increment(this.cpt);
    }
}

module.exports.MonBouton = MonBouton;
module.exports.MonChamp = MonChamp;