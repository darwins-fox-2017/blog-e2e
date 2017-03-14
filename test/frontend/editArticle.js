const chai = require('chai');
const should = chai.should();
const Nightmare = require('nightmare');

describe(`edit artikel`, function(){
  this.timeout(50000);
  it('should return edited artikel',function(done){
    const nightmare = Nightmare({show: true});
    nightmare
    .goto('http://localhost:8080')
    .wait('#thumbnail')
    .click('a[name=modal-edit]')
    .wait('.modal')
    .click('.modal input[type=text]')
    .type('.modal input[type=text]', 'juduledit')
    .click('.modal .materialize-textarea')
    .type('.modal .materialize-textarea', 'hasiledit')
    .click('.modal .modal-action')
    .evaluate(function(){
      return document.querySelector('#thumbnail').innerHTML
    })
    .end()
    .then((result) => {
      result.should.be.a('string')
      done()
    })
  })
})
