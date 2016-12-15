const assert = require('assert');
const Contact = require('../../model/contact');

describe('class Contact Array', function() {
    describe('method find', function() {
        it('should return 2 contacts', function() {
            Contact.find((err, contacts) => {
                assert.equal(contacts.length, 2);
            });
        });

        it('should not contains error', function(done) {
            Contact.find(done);
        });
    });
    describe('method findById', function() {
        it('should return right contact', function() {
            Contact.findById(123, (err, contact) => {
                assert.equal(contact.id, 123);
                assert.equal(contact.prenom, 'Bill');
                assert.equal(contact.nom, 'Gates');
            });
        });
    });
    describe('method save', function() {
        it('should creates an id', function() {
            var ctc = new Contact({prenom: 'A', nom: 'B'});
            ctc.save((err, contact) => {
                assert.ok(contact.id);
            });
        });
    });
});