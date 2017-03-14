const chai = require('chai');
const should = chai.should();
const Nightmare = require('nightmare');

describe(`Delete an Article`, function(){
  this.timeout(10000);
  it('should return empty string',function(done){
    const nightmare = Nightmare({show: true});
    nightmare
    .goto('http://localhost:8080')
    .wait('#root')
    .click('a[name=delete]')
    .click('.confirm')
    .click('.confirm')
    .evaluate(function(){
      if(document.querySelector('#root').innerHTML) {
        return "deleted"
      }
    })
    .end()
    .then((result) => {
      result.should.equal("deleted")
      done()
    })
  })
})
