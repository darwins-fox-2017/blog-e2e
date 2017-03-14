const chai = require('chai');
const should = chai.should();
const Nightmare = require('nightmare');

describe(`delete artikel`, function(){
  this.timeout(10000);
  it('should return empty string',function(done){
    const nightmare = Nightmare({show: true});
    nightmare
    .goto('http://localhost:8080')
    .wait('#thumbnail')
    .click('a[name=delete]')
    .evaluate(function(){
      if(document.querySelector('#thumbnail').innerHTML) {
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
