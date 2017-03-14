var express = require('express');
var router = express.Router();

var postController = require('../controllers/postController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
  
})

module.exports = router;
