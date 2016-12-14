const fs = require('fs');

module.exports.file = 'default.log';


module.exports.log = function(msg) {
    fs.appendFileSync(module.exports.file, msg);
};

module.exports.reset = function() {
    fs.unlinkSync(module.exports.file);
};