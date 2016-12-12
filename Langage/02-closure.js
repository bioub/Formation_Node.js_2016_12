
const logClosure = function(msg) {

    const interne = function() {
        console.log(msg);
    };

    return interne;
};

const hello = logClosure('Hello');
// ...
hello();

for (var i=0; i<3; i++) {
    setTimeout(function timeoutHandler() {
        console.log(i);
    }, 1000);
}

for (var i=0; i<3; i++) {
    setTimeout(logClosure(i), 1000);
}

for (let i=0; i<3; i++) {
    setTimeout(function timeoutHandler() {
        console.log(i);
    }, 1000);
}