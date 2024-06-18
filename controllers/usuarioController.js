const db = require('../db/index')
const data = require("../database/models")

const usuarioController = {
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
        
            data.Usuario.create({
                email: form.email,
                usuario: form.usuario,
                contrasena: form.contrasena,
                fecha: form.fecha,
                dni:form.dni,
                fotodeperfil: form.fotodeperfil
            })
            .then(function(user) {
                // return res.send(user)
                return res.redirect("/")
            })
            .catch(error=>console.log(error))}
         ,

    login: function (req,res) {
        data.User.findOne({
            where: [{email:req.body.email}]
        })
        .then(function(userEncontrado){
            req.sesion.usuario = {
                email: userEncontrado.email,
                userName: userEncontrado.name,
            }
            if(req.body.recordar != undefinded){
                res.cookie('cookieEspecial','el dato que quiero guardar', {maxAge: 1000*60*123123123})
            }
        })
        
    }
            }
    
module.exports = usuarioController