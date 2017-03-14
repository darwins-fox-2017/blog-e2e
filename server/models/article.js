`use strict`
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var articleSchema = new Schema({
  title: {type: String, unique: true},
  content: String,
  category: String,
  slug: String
},
  {
    timestamp: true
  })

var Article = mongoose.model('Article', articleSchema)

module.exports = Article
