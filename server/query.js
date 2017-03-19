var mongoose = require('mongoose');
var express = require('express')
mongoose.connect('mongodb://localhost/blog-tdd');

let Content = require("./models/contentSchema.js");

function insertContent() {
    let content1 = new Content({
        title: "seorang irwin pergi berbelanja di pasar",
        artikel: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    });

    let content2 = new Content({
        title: "meninggal karena wanita jadi - jadian",
        artikel: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    });

    content1.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`content 1 berhasil dimasukkan`);
    });

    content2.save(function (err, res) {
        if (err) return console.error(err);
        console.log(`content 2 sberhasil dimasukkan`);
    });
}

insertContent()
