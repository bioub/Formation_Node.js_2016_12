const contact = {
    prenom: 'Romain',
    nom: 'Bohdanowicz'
};

for (let prop in contact) {
    console.log(prop);
    console.log(contact[prop]);
}

const Contact = function(prenom, nom) {
    this.prenom = prenom;

    this.getNom = function() {
        return nom;
    };
};

let romain = new Contact('Romain', 'Bohdanowicz');
console.log(typeof romain); // object
console.log(typeof Contact); // function
console.log(romain.prenom); // Romain
console.log(romain.getNom()); // Bohdanowicz

let jean = new Contact('Jean', 'Dupont');
console.log(jean.getNom()); // Bohdanowicz

console.log(romain.getNom === jean.getNom); // false

const Voiture = function(marque) {
    this.marque = marque;
};

Voiture.prototype.demarrer = function() {
    return 'Vrrooomm';
};

let clio = new Voiture('Renault');
console.log(clio.marque);
console.log(clio.demarrer());
console.log(clio.hasOwnProperty('marque')); // true
console.log(clio.hasOwnProperty('demarrer')); // false