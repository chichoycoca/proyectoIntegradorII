var express = require('express');
var router = express.Router();
let { body } = require("express-validator");
const usuarioController = require('../controllers/usuarioController')

let registerValidations = [
    body("email")
        .notEmpty().withMessage("Por favor completa con el email").bail()
        
    ,body("contrasena")
        .notEmpty().withMessage("Por favor completa con la contraseña")
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')

];


router.get('/login', usuarioController.login);
router.get('/profile', usuarioController.profile);
router.get('/profile-edit', usuarioController.profileEdit);
router.get('/register',usuarioController.register);
router.post('/store', registerValidations,usuarioController.store);

router.post('/login', usuarioController.login);

module.exports = router;