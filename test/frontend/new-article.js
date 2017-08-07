const chai = require('chai')
const should = chai.should()
const Nightmare = require('nightmare')

describe(`Create new article`, function () {
  this.timeout(50000)
  it('It should return new article', function (done) {
    const nightmare = Nightmare({show: true})
    nightmare
      .goto('http://localhost:8080/')
      .wait('#btn-new-article')
      .click('#btn-new-article')
      .wait(1000)
      .click('#title')
      .type('#title', 'Melakukan Type Conversion di JavaScript')
      .click('#image')
      .type('#image', 'https://www.codepolitan.com/uploads/image/source/1/javascript-cover-image(700x350-crop).jpg')
      .click('#content')
      .type('#content', 'Ini halaman content lho....')
      .click('#category')
      .type('#category', 'Technology')
      .click('#slug')
      .type('#slug', 'melakukan-type-conversion-di-javaScript')
      .click('#save-new-article')
      .evaluate(function () {
        return document.querySelector('#blogs').innerHTML
      })
      .end()
      .then(function (result) {
        result.should.be.a('string')
        done()
      })
  })
})
