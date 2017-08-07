'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let articleSchema = Schema({
  'title': String,
  'image': String,
  'content': String,
  'category': String,
  'slug': String
}, {
  timestamps: true
})

let Article = mongoose.model('Articles', articleSchema)

module.exports = Article
