const MonBouton = require('./MonBouton');

let myBtn = new MonBouton();
myBtn.click();
myBtn.click();
myBtn.click();
myBtn.click();
myBtn.click();

console.log(myBtn.toString()); // <button>3</button>