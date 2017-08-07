'use strict'

let Model = require('../models/Users')
let User = {}

User.getUsers = (req, res, next) => {
  Model.find({}).then((data) => {
    res.send(data)
  })
}

User.newUser = (req, res, next) => {
  Model.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }).then((data) => {
    res.send(data)
  })
}

User.getUser = (req, res, next) => {
  Model.findOne({ 'username': req.params.username }).then((data) => {
    res.send(data)
  })
}

User.updateUser = (req, res, next) => {
  Model.update({username: req.params.username}, {$set: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
  }}).then((data) => {
    res.send(data)
  })
}

User.deleteUser = (req, res, next) => {
  Model.remove({username: req.params.username}).then((data) => {
    res.send(data)
  })
}

module.exports = User
