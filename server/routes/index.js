var express = require('express')
var router = express.Router()
var Article = require('../controller/article')
var User = require('../controller/user')

/* GET home page. */
router.get('/articles', Article.getArticles)
router.post('/article', Article.newArticle)
router.get('/article/:slug', Article.getArticle)
router.put('/article/:slug', Article.updateArticle)
router.delete('/article/:slug', Article.deleteArticle)

router.get('/users', User.getUsers)
router.post('/user', User.newUser)
router.get('/user/:username', User.getUser)
router.put('/user/:username', User.updateUser)
router.delete('/user/:username', User.deleteUser)

module.exports = router
