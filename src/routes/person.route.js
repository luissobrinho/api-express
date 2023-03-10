const express = require('express');
const router = express.Router();
const controller = require('../controllers/person.controller');

router.get('/', controller.get);
router.get('/:id', controller.one);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;