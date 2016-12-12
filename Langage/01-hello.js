console.log('Hello');

let id = setInterval(function intervalHandler() {
    console.log('1s');
}, 1000);

setTimeout(function timeoutHandler() {
    console.log('Bye');
    clearInterval(id);
}, 4500);
