'use strict'

let Model = require('../models/articles')
const slug = require('slug')
let Article = {}

Article.getArticles = (req, res, next) => {
  Model.find({}).then((data) => {
    res.send(data)
  })
}

Article.newArticle = (req, res, next) => {
  Model.create({
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    category: req.body.category,
    slug: slug(req.body.title).toLowerCase()
  }).then((data) => {
    res.send(data)
  })
}

Article.getArticle = (req, res, next) => {
  Model.findOne({ slug: req.params.slug }).then((data) => {
    res.send(data)
  })
}

Article.updateArticle = (req, res, next) => {
  Model.update({slug: req.params.slug}, {$set: {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      slug: slug(req.body.title).toLowerCase()
  }}).then((data) => {
    res.send(data)
  })
}

Article.deleteArticle = (req, res, next) => {
  Model.remove({slug: req.params.slug}).then((data) => {
    res.send(data)
  })
}

module.exports = Article
