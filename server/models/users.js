'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = Schema({
  'username': String,
  'email': String,
  'password': String
})

let User = mongoose.model('Users', userSchema)

module.exports = User
