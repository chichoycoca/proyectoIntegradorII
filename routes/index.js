var express = require('express');
var router = express.Router();
let productoController = require('../controllers/productoController')

router.get('/', productoController.index);

module.exports = router;
