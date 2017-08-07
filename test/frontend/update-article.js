const chai = require('chai')
const should = chai.should()
const Nightmare = require('nightmare')

describe(`Edit an Article`, function () {
  this.timeout(60000)
  it('It should return edited article', function (done) {
    const nightmare = Nightmare({show: true})
    nightmare
      .goto('http://localhost:8080/')
      .wait('#btn-edit-article')
      .click('#btn-edit-article')
      .wait(1000)
      .click('#edit_title')
      .type('#edit_title', 'Melakukan Type Conversion di JavaScript 008')
      .click('#edit_image')
      .type('#edit_image', 'https://www.codepolitan.com/uploads/image/source/1/javascript-cover-image(700x350-crop).jpg')
      .click('#edit_content')
      .type('#edit_content', 'Ini halaman content yang udah di edit lho....')
      .click('#edit_category')
      .type('#edit_category', 'Technology')
      .click('#edit_slug')
      .type('#edit_slug', 'melakukan-type-conversion-di-javaScript-8')
      .click('#edit_button')
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
