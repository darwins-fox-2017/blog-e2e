const chai = require('chai');
const should = chai.should();
const Nightmare = require('nightmare');

describe(`Create new article`, function(){
  this.timeout(50000);
  it('should return new article',function(done){
    const nightmare = Nightmare({show: true});
    nightmare
    .goto('http://localhost:8080')
    .wait('#btn-float')
    .click('#btn-float')
    .click('#title-input')
    .type('#title-input', 'Ini Judul')
    .click('#content-input')
    .type('#content-input', 'Ini COntent')
    .click('#category-input')
    .type('#category-input', 'masak')
    .click('#submit-button')
    .evaluate(function(){
      return document.querySelector('#root').innerHTML
    })
    .end()
    .then(function(result){
      result.should.be.a('string')
      done()
    })
  })
})
