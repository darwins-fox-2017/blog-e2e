var Article = require('../models/article')
var slug = require('slug')

module.exports = {
  createArticle: function(req,res){
    Article.create({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      slug: slug(req.body.title).toLowerCase()
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateArticle: function(req,res){
    Article.findOneAndUpdate({slug:req.params.slug}, {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      slug: slug(req.body.title).toLowerCase()
    }, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteArticle: function(req,res){
    Article.findOneAndRemove({slug:req.params.slug}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readArticles: function(req,res){
    Article.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readArticle: function(req,res){
    Article.findOne({slug:req.params.slug}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
}
