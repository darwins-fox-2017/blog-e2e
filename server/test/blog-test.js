var chai = require('chai')
var chaiHttp = require('chai-http')

var should = chai.should()

chai.use(chaiHttp)

let serverHost = 'http://localhost:3000'


describe('Server is running test', () => {
    it('Should be return "pong" when try to access /ping', (done) => {
        chai.request(serverHost).get('/ping').end((err, res) => {
            if (err) {
                done(err)
            } else {
                // res.body.should.be.json;
                res.body.msg.should.equal('pong');
                done()
            }
        });
    })
})

describe('CRUD Post test', () => {
  describe('Read all data', () => {
    it('Should be return array of post when try to access "/api.posts/"', (done) => {
      chai.request(serverHost).get('/api/posts').end((err, res) => {
        if (err) {
          done(err)
        } else {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body[0].should.have.property('title');
          res.body[0].should.have.property('body');
          res.body[0].should.have.property('slug');
          done()
        }
      });
    })
  })
  describe('Create a post', () => {
    it('Should be return success message when try to create post "/api/posts"', (done) => {
      chai.request(serverHost)
        .post('/api/posts')
        .send({
          title: 'Test from Chai',
          body: 'Ini body test bukan bodyParser',
          published: true
        })
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            res.should.have.status(200);
            res.should.be.json;
            res.body.status.should.equal(true)
            done()
          }
      });
    })
  })
  describe('Retrive single post', () => {
    it('Should be return a post data when try to get single post "/api/posts/1"', (done) => {
      chai.request(serverHost).get('/api/posts/1').end((err, res) => {
        if (err) {
          done(err)
        } else {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.an('object')
          res.body.should.have.property('title');
          res.body.should.have.property('body');
          res.body.should.have.property('slug');
          done()
        }
      });
    })
  })
  describe('Update a post', () => {
    it('Should be return success message when try to Update blogpost "/api/posts/1"', (done) => {
      chai.request(serverHost)
        .put('/api/posts/1')
        .send({
          title: 'Test from Chai Updated',
          body: 'Ini body test bukan bodyParser Updated',
          published: true
        })
        .end((err, res) => {
          if (err) {
            done(err)
          } else {
            res.should.have.status(200);
            res.should.be.json;
            res.body.status.should.equal(true)
            done()
          }
      });
    })
  })
  describe('Detele single post', () => {
    it('Should be return success message when try to delete single blogpost "/api/posts/2"', (done) => {
      chai.request(serverHost).delete('/api/posts/2').end((err, res) => {
        if (err) {
          done(err)
        } else {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.an('object')
          res.body.status.should.equal(true)
          done()
        }
      });
    })
  })
})
