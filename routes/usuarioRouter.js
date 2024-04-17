var express = require('express');
var router = express.Router();
let usuarioController = require('../controllers/usuarioController')

router.get('/login', usuarioController.login);
router.get('/profile', usuarioController.profile);
router.get('/profile-edit', usuarioController.profileEdit);
router.get('/register', usuarioController.register);


module.exports = router;