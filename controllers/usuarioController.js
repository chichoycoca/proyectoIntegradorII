const db = require('../db/index')

let usuarioController = {
    login: function (req, res) {
        return res.render('login', {})
    },
    profile: function (req, res) {
        return res.render('profile', {nombreDeUsuario: db.usuario[1].usuario
            ,fotoDePerfil: db.usuario[1].fotoPerfil
            ,data:db.producto}
    )
    },
    profileEdit: function (req, res) {
        return res.render('profile-edit', {})
    },
    register: function (req, res) {
        return res.render('register', {})
    },   
    
}

module.exports = usuarioController