var chai = require('chai');
var chaiHttp = require('chai-http');
var server = 'http://localhost:3000'
var should = chai.should();

chai.use(chaiHttp);

describe('Get method', function () {
    // Search by name
    it('Should GET all data from server', function (done) {
        chai.request(server)
            .get('/')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
});

describe('Post method', function () {
    // Search by name
    it('Should POST some data to server', function (done) {
        chai.request(server)
            .post('/')
            .send({
                artikel: "irwin beli sepeda baru di mall AEON"
            })
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('_id')
                res.body.should.have.property('artikel');
                done();
            });
    });
});

describe('Put method', function () {
    // Search by name
    it('Should UPDATE some data from server', function (done) {
        chai.request(server)
            .put('/')
            .send({
                contentId: 19,
                artikel: "eri beli balon di pasar"
            })
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('_id')
                res.body.should.have.property('artikel');
                res.body.artikel.should.equal('eri beli balon di pasar')
                done();
            });
    });
});

describe('Delete method', function () {
    // Search by name
    it('Should DELETE some data from server', function (done) {
        chai.request(server)
            .delete('/')
            .send({
                contentId: 19
            })
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.have.property('message')
                done();
            });
    });
});
