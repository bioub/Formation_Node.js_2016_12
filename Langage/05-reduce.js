var nbs = [1, 2, 3, 4];

console.log(nbs.reduce(function (acc, nb) {
    return acc + nb;
}));

var nb = [1, 2, 3, 4, 3, 2, 1];

console.log(nbs.reduce(function (acc, nb) {
    if (!acc.includes(nb)) {
        acc.push(nb);
    }
    return acc;
}, []));