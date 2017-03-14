const chai = require('chai');
const should = chai.should();
const Nightmare = require('nightmare');

describe(`Create new artikel`, function(){
  this.timeout(50000);
  it('should return new artikel',function(done){
    const nightmare = Nightmare({show: true});
    nightmare
    .goto('http://localhost:8080')
    .wait('#title')
    .click('#title')
    .type('#title', 'My Blog')
    .click('#text')
    .type('#text', 'Hello World!')
    .click('#submit-button')
    .evaluate(function(){
      return document.querySelector('#thumbnail').innerHTML
    })
    .end()
    .then(function(result){
      result.should.be.a('string')
      done()
    })
  })
})
