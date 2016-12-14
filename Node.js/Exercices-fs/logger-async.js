const fs = require('fs');

module.exports.file = 'default.log';


module.exports.log = function(msg, callback) {
    fs.appendFile(module.exports.file, msg, callback);
};

module.exports.reset = function(callback) {
    fs.unlink(module.exports.file, callback);
};