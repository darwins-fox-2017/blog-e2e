var express = require('express');
var router = express.Router();

var postController = require('../../controllers/postController')

/* GET users listing. */
router.get('/', postController.index);

router.get('/:id', postController.show);

router.post('/', postController.create)

router.put('/:id', postController.update);

router.delete('/:id', postController.destroy);

module.exports = router;
