var Nightmare = require('nightmare');
var expect = require('chai').expect; // jshint ignore:line
var should = require('chai').should(); // jshint ignore:line

let host = 'http://localhost:8010'

describe('Test CRUD blogpost', function() {
  this.timeout(20000)
  it('Should show list of blogpost when try to access /post', function(done) {
    var nightmare = Nightmare({show:false})

    nightmare
      .goto(host + '/posts')
      .wait('.el-table_1_column_1 div.cell')
      .evaluate(function () {
        return document.querySelectorAll(".el-table_1_column_1 div.cell")[1].innerHTML
      })
      .end()
      .then(function(post) {
        post.should.be.a('string')
        done();
      })
  });
  it('Should show create blogpost form and success message', function(done) {
    var nightmare = Nightmare({show:true})

    nightmare
      .goto(host + '/posts')
      .wait(1000)
      .click('#create-new-post')
      .wait(1000)
      .wait('form')
      .type('input[name=title]', 'Ini yang menulis adalah hantu')
      .type('textarea[name=body]', 'Iya, saya hantu. percayalah.')
      .click('button[name="post blogpost"]')
      .goto(host + '/posts')
      .wait(1000)
      .wait('.el-table_1_column_1 div.cell')
      .evaluate(function () {
        console.log('running');
        return document.querySelectorAll(".el-table_1_column_1 div.cell")[1].innerHTML
      })
      .end()
      .then(function(post) {
        console.log('jalan post', post);
        post.should.equal('Ini yang menulis adalah hantu')
        done();
      })
  });
  it('Should show edit blogpost form and success message', function(done) {
    var nightmare = Nightmare({show:true})

    nightmare
      .goto(host + '/posts')
      .wait(1000)
      .click('button[title="edit blogpost"]')
      .wait(1000)
      .wait('form')
      .insert('input[name=title]', '')
      .type('input[name=title]', 'Judul ini diganti oleh hantu')
      .insert('textarea[name=body]', '')
      .type('textarea[name=body]', 'Contentnya juga sudah dirubah oleh hantu. percayalah.')
      // .uncheck('input[name=published]')
      .click('button[name="update blogpost"]')
      .goto(host + '/posts')
      .wait(1000)
      .wait('.el-table_1_column_1 div.cell')
      .evaluate(function () {
        console.log('running');
        return document.querySelectorAll(".el-table_1_column_1 div.cell")[1].innerHTML
      })
      .end()
      .then(function(post) {
        console.log('edit', post);
        post.should.equal('Judul ini diganti oleh hantu')
        done();
      })
  });
  it('Should show new list of post without deteled post', function(done) {
    var nightmare = Nightmare({show:true})

    nightmare
      .goto(host + '/posts')
      .wait(1000)
      .click('button[title="delete blogpost"]')
      .wait(2000)
      .wait('.el-table_1_column_1 div.cell')
      .evaluate(function () {
        console.log('running');
        return document.querySelectorAll(".el-table_1_column_1 div.cell")[1].innerHTML
      })
      .end()
      .then(function(post) {
        post.should.not.equal('Judul ini diganti oleh hantu')
        done();
      })
  });
});
