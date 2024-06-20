const db = require('../db/index')
const data = require("../database/models")
let bcrypt = require("bcryptjs")
let {validationResult} = require("express-validator")

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
        return res.render('register')
    },   
    store: function(req, res) {
        let form = req.body
        let errors = validationResult(req);
        if (errors.isEmpty()){
            
        }
        
        
            data.Usuario.create({
                email: form.email,
                usuario: form.usuario,
                contrasena: bcrypt.hashSync(form.contrasena, 10), 
                fecha: form.fecha,
                dni:form.dni,
                fotodeperfil: form.fotodeperfil
            })
            .then(function(user) {
                // return res.send(user)
                return res.redirect("/")
            })
            .catch(error=>console.log(error))

        },

    login: function (req,res) {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            
        
        data.Usuario.findOne({
            where: [{email:req.body.email}]
        })
        .then(function(userEncontrado){
            if(!userEncontrado){
                return res.send("Not found");
            }
                if(req.body.recordarme != undefinded){
                res.cookie('usuarioLogeado',userEncontrado, {maxAge: 1000*60*600})
                }
        })
        
    }}
}    
module.exports = usuarioController