var express = require('express');
var router = express.Router();
let { body } = require("express-validator");
let productoController = require('../controllers/productoController')

let crearProductoValidations=[
    body('imagen_producto').notEmpty().withMessage("Por favor agrega una foto de tu producto"),
    body('producto').notEmpty().withMessage("Por favor agrega el nombre de tu producto"),
    body('descripcion').notEmpty().withMessage("Por favor agrega la descripción de tu producto")

];

let comentarValidations=[
    body('comentario').notEmpty().withMessage("Por favor agrega un comentario")
    .isLength({ min: 3 }).withMessage('El comentario debe tener al menos 3 caracteres')
]



router.get("/", productoController.index);
router.get('/add', productoController.productAdd);
router.get('/buscar', productoController.buscador);
router.post('/add',crearProductoValidations, productoController.crearProducto);
router.get("/editProduct/:id_product/:id_user", productoController.editProducto);
router.post("/editedProduct/:id_product", crearProductoValidations, productoController.editedProducto);
router.get('/:id', productoController.detalleProducto);
router.post('/borradoProducto/:id', productoController.borradoProducto)
router.post('/comentario/:id', comentarValidations, productoController.comentar);

module.exports = router;