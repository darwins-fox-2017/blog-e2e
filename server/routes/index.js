var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index', { title: 'Express' });
});

router.post('/register', controller.register)

router.post('/login', controller.login)

router.delete('/login/:username', controller.deleteUser)



module.exports = router;
