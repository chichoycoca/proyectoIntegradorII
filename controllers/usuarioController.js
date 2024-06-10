const db = require('../db/index')
const data = require("../database/models")

let usuarioController = {
    login: function (req, res) {
        return res.render('login', {})
    },
    profile: function (req, res) {
        return res.render('profile', {nombreDeUsuario: db.usuario[1].usuario
            ,fotoDePerfil: db.usuario[1].fotoPerfil, email: db.usuario[1].email
            ,data:db.producto}
    )
    },
    profileEdit: function (req, res) {
        return res.render('profile-edit', {nombreDeUsuario: db.usuario[1].usuario
            ,fotoDePerfil: db.usuario[1].fotoPerfil, email: db.usuario[1].email
            ,data:db.producto})
    },
    register: function (req, res) {
        return res.render('register', {nombreDeUsuario: db.usuario[1].usuario
            ,fotoDePerfil: db.usuario[1].fotoPerfil, email: db.usuario[1].email
            ,data:db.producto})
    },   
    store: function(req, res) {
        let form = req.body
        res.send(form)
            data.Usuario.create({
                email: form.email,
                usuario: form.usuario,
                contrasena: form.contrasena,
                fecha: form.fecha,
                dni:form.dni,
                fotodeperfil: form.fotodeperfil

            })
            .then(function () {
                return res.redirect("/register")
            })
            .catch(error=>console.log(error))}
         ,

            
            

            
        
        }
    
module.exports = usuarioController