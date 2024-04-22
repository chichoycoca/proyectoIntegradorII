var express = require('express');
var router = express.Router();
let productoController = require('../controllers/productoController')
const data= require('../db/index')

router.get('/', productoController.producto);
router.get('/add', productoController.productAdd);


module.exports = router;