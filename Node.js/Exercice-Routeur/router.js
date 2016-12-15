const routes = require('./routes');

module.exports.dispatch = (req, res) => {
    let url = req.url;
    let method = req.method;

    let match = routes.find(route => route.url === url && route.method === method);

    if (!match) {
        res.statusCode = 404;
        return res.end('404 Not Found');
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    match.callback(req, res);
};