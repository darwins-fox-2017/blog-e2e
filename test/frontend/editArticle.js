const chai = require('chai');
const should = chai.should();
const Nightmare = require('nightmare');

describe(`Edit an Article`, function(){
  this.timeout(50000);
  it('should return edited article',function(done){
    const nightmare = Nightmare({show: true});
    nightmare
    .goto('http://localhost:8080')
    .wait('#root')
    .click('a[name=modal-edit]')
    .wait('.modal')
    .click('#input-title')
    .type('#input-title', 'ini judul')
    .click('#input-content')
    .type('#input-content', 'ini content baru')
    .click('#input-category')
    .type('#input-category', 'ini category')
    .click('#update-button')
    .evaluate(function(){
      return document.querySelector('#root').innerHTML
    })
    .end()
    .then((result) => {
      result.should.be.a('string')
      done()
    })
  })
})
