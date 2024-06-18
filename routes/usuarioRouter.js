var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router.get('/login', usuarioController.login);
router.get('/profile', usuarioController.profile);
router.get('/profile-edit', usuarioController.profileEdit);
router.get('/register', usuarioController.register);
router.post('/store', usuarioController.store);
router.post('/login', usuarioController.login);

module.exports = router;