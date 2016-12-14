/**
 * Création d'un bouton
 * @param {object} [options={}] - Les paramètres
 * @param {string} options.value - La valeur (obligatoire)
 * @param {Array} options.classes - Les classes
 * @param {string} options.type - Le type
 *
 */
const createButton = function (options) {
    options = options || {};
    options.value = options.value || 'Valider';
    options.classes = options.classes || [];
    options.type = options.type || false;

    return `<button class="${options.classes.join(' ')}">${options.value}</button>`;
};

// <button type="submit" class="btn btn-default">Value</button>


console.log(createButton());
console.log(createButton({
    classes: ['btn', 'btn-default'],
    value: 'Clic moi'
}));

/**
 * Création d'un bouton
 *
 */
const createButtonES6 = function ({value = 'Valider', classes = [], type = false} = {}) {
    return `<button class="${classes.join(' ')}">${value}</button>`;
};

// <button type="submit" class="btn btn-default">Value</button>


console.log(createButtonES6());
console.log(createButtonES6({
    classes: ['btn', 'btn-default'],
    value: 'Clic moi'
}));