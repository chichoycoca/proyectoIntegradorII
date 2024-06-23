var express = require('express');
var router = express.Router();
let { body } = require("express-validator");
const usuarioController = require('../controllers/usuarioController');

let registerValidations = [
    body("email")
        .notEmpty().withMessage("Por favor completa con el email")
        
    ,body("contrasena")
        .notEmpty().withMessage("Por favor completa con la contraseña")
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')

];
let loginValidations = [
    body("email")
      .notEmpty().withMessage("Email incompleto").bail()
      .isEmail().withMessage("Ingrese un email correcto"),
    body("contrasena").notEmpty().withMessage("Campo contraseña incompleto"),
  ];

router.get('/login', usuarioController.login);
router.get('/profile/:id', usuarioController.profile);
router.get('/profile-edit', usuarioController.profileEdit);
router.get('/register',usuarioController.register);
router.post('/register', registerValidations,usuarioController.store);
router.post('/logout', usuarioController.logout);

router.post('/login', loginValidations, usuarioController.loginproceso);

module.exports = router;