const fsp = require('fs-promise');

module.exports.file = 'default.log';


module.exports.log = function(msg) {
    return fsp.appendFile(module.exports.file, msg);
};

module.exports.reset = function() {
    return fsp.unlink(module.exports.file);
};