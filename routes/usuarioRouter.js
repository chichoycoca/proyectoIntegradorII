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
let editProfileValidations = [
  body('email').notEmpty().withMessage("Pone el email")
  .isEmail().withMessage("El email tiene que ser válido"),
  body("dni").notEmpty().withMessage("Completa el DNI")

  

]

router.get('/login', usuarioController.login);

router.get('/profile-edit/:id', usuarioController.profileEdit);
router.post('/profile-edit/:id',editProfileValidations, usuarioController.procesadorProfileEdit);
router.get('/register',usuarioController.register);
router.post('/register', registerValidations,usuarioController.store);
router.post('/logout', usuarioController.logout);
router.post('/login', loginValidations, usuarioController.loginproceso);
router.get('/profile/:id', usuarioController.profile);
module.exports = router;