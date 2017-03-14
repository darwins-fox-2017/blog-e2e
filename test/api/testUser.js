var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('Testing user route', function () {
  it('should data of new user register', function (done) {
    chai.request('http://localhost:3000')
      .post('/register')
      .send({
        username: 'didietsuryadi',
        password: 'diditsuryadi'
      })
      .end(function (err,res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.username.should.equal('didietsuryadi');
        done()
      })
  })

  it('should return username of user', function (done) {
    chai.request('http://localhost:3000')
      .post('/login')
      .send({
        username: 'didietsuryadi',
        password: 'diditsuryadi'
      })
      .end(function (err,res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.username.should.equal('didietsuryadi');
        done()
      })
  })

  it('should return username of user', function (done) {
    chai.request('http://localhost:3000')
      .delete('/login/didietsuryadi')
      .end(function (err,res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.username.should.equal('didietsuryadi');
        done()
      })
  })

})
