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