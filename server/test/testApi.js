var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('Testing route API', function () {
  it('should store new artikel to database, and return the data back', function (done) {
    chai.request('http://localhost:3000')
      .post('/api/article')
      .send({
        title: "This is Title",
        content: "This is Content, where is the main article",
        category: "Cooking"
      })
      .end(function (err,res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.title.should.equal('This is Title');
        res.body.content.should.equal('This is Content, where is the main article');
        res.body.category.should.equal('Cooking')
        done()
      })
  })

  it('should return data of an article', function (done) {
    chai.request('http://localhost:3000')
      .get('/api/article/this-is-title')
      .end(function (err,res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.title.should.equal('This is Title');
        res.body.content.should.equal('This is Content, where is the main article');
        res.body.category.should.equal('Cooking')
        done()
      })
  })

  it('shoul return data of articles', function (done) {
    chai.request('http://localhost:3000')
      .get('/api/article')
      .end(function (err,res) {
        res.should.be.json;
        res.should.have.status(200);
        done()
      })
  })

  it('should return new data of updated data', function (done) {
    chai.request('http://localhost:3000')
      .put('/api/article/this-is-title')
      .send({
        content: "This is Content, will provide issue about node js"
      })
      .end(function (err,res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.title.should.equal('This is Title');
        res.body.content.should.equal('This is Content, will provide issue about node js');
        res.body.category.should.equal('Cooking')
        done()
      })
  })

  it('should return of deleted data', function (done) {
    chai.request('http://localhost:3000')
      .delete('/api/article/this-is-title')
      .end(function (err,res) {
        res.should.be.json;
        res.should.have.status(200);
        res.body.title.should.equal('This is Title');
        res.body.content.should.equal('This is Content, will provide issue about node js');
        res.body.category.should.equal('Cooking');
        done()
      })
  })

})
