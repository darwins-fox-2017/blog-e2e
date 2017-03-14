var express = require('express');
var router = express.Router();
var controller = require('../controllers/articleController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/article', controller.readArticles)

router.get('/article/:slug', controller.readArticle)

router.post('/article', controller.createArticle)

router.put('/article/:slug', controller.updateArticle)

router.delete('/article/:slug', controller.deleteArticle)

module.exports = router;
