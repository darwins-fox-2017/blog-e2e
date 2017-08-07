const chai = require('chai')
const should = chai.should()
const Nightmare = require('nightmare')

describe(`Delete an Article`, function () {
  this.timeout(10000)
  it('should return empty string', function (done) {
    const nightmare = Nightmare({show: true})
    nightmare
      .goto('http://localhost:8080/')
      .wait('#btn-delete-article')
      .click('#btn-delete-article')
      .wait(1000)
      .click('.confirm')
      .evaluate(function () {
        if (document.querySelector('#blogs')) {
          return null
        }
      })
      .end()
      .then(function (result) {
        result.should.have.status(200)
        result.body.should.be.a(null)
        done()
      })
  })
})
