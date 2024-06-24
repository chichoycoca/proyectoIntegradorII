var express = require('express');
var router = express.Router();
let { body } = require("express-validator");
let productoController = require('../controllers/productoController')

let crearProductoValidations=[
    body('imagen_producto')
    .notEmpty().withMessage("Por favor agrega una foto de tu producto")
    ,body('producto')
    .notEmpty().withMessage("Por favor agrega el nombre de tu producto")
    ,body('descripcion')
    .notEmpty().withMessage("Por favor agrega la descripción de tu producto")

];




router.get('/add', productoController.productAdd);
router.get('/buscar', productoController.buscador)
router.post('/add',crearProductoValidations, productoController.crearProducto)
router.get('/:id', productoController.detalleProducto);

module.exports = router;