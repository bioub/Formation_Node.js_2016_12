const Router = require('express').Router;
const Contact = require('../model/contact-mongo');
const bodyParser = require('body-parser');

let router = new Router();

router.get('/', (req, res, next) => {
    Contact.find({}, 'prenom nom', (err, contacts) => {
        if (err) {
            return next(err);
        }

        res.json(contacts)
    });
});

router.post('/', bodyParser.json(), (req, res, next) => {

    var contact = new Contact(req.body);
    contact.save((err, contact) => {
        if (err) {
            return next(err);
        }

        res.statusCode = 201;
        res.json(contact);
    });

});

router.get('/:id', (req, res, next) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (err) {
            return next(err);
        }

        if (!contact) {
            req.message = 'Le contact n\'existe pas';
            return next();
        }

        res.json(contact);
    });
});


module.exports = router;