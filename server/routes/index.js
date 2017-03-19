var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog-tdd');

let Content = require("../models/contentSchema.js");

router.get('/', function (req, res) {
    Content.find({}, function (err, result) {
        if (err) res.status(500)
            .send(err);
        res.send(result)
    })
});

router.post('/', function (req, res) {
    let content1 = new Content({
        title: req.body.title,
        artikel: req.body.artikel
    });

    content1.save(function (err, respond) {
        if (err) return console.error(err);
        res.send(content1)
    });
});

router.put('/', function (req, res) {
    Content.findOneAndUpdate({
        contentId: req.body.contentId
    }, {
        $set: {
            artikel: req.body.artikel
        }
    }, {
        new: true
    }, function (err, tank) {
        if (err) return res.send(err.message);
        res.send(tank);
    });
});

router.delete('/', function (req, res) {
    Content.findOneAndRemove({
        contentId: req.body.contentId
    }, function (err, Content) {
        var response = {
            message: `Content with contentId ${req.body.contentId} successfully deleted`
        };
        res.send(response);
    });
});

module.exports = router;
