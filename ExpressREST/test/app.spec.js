var chai = require('chai')
    , chaiHttp = require('chai-http');

chai.use(chaiHttp);

var expect = chai.expect;

var app = require('../app');

describe('Tests fonctionnels', function() {
    describe('contact list', function() {
        it('should be accessible', function(done) {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                })
        })
    })

    describe('contact show', function() {
        it('should be accessible', function(done) {
            chai.request(app)
                .get('/contacts/123')
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                })
        })
    })

    describe('contact add', function() {
        it('should be accessible', function(done) {
            chai.request(app)
                .get('/contacts/add')
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                })
        })
        it('should redirect on post', function(done) {
            chai.request(app)
                .post('/contacts/add')
                .set('Content-type', 'application/x-www-form-urlencoded')
                .send({prenom: 'A', nom: 'B'})
                .end((err, res) => {
                    if (err) {
                        done(err);
                    }
                    expect(err).to.be.null;
                    expect(res).to.redirect;
                    done();
                })
        })
    })

    // Functionals
    // Tester la page /contacts/123
    // Tester la page POST /contacts/add (regarder chai-http)

    // Unitaire
    // Tester la méthode findById
    // Tester la méthode save
})