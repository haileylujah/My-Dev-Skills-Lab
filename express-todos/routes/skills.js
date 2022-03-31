var express = require('express');
var router = express.Router();
const skillController = require('../controllers/skills')

router.get('/', skillController.index);

router.get('/new', skillController.new);

router.get('/:id', skillController.show);

router.get('/:id/edit', skillController.edit);

router.post('/', skillController.create);

router.delete('/:id', skillController.delete);


module.exports = router;