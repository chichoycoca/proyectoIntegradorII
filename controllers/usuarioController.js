const db = require('../db/index')
const data = require("../database/models")
let bcrypt = require("bcryptjs")
let {validationResult, cookie} = require("express-validator")
const { Association } = require('sequelize')

let usuarioController = {
    profile: function (req, res) {
        const idUsuario = req.params.id;
        data.Usuario.findByPk(idUsuario, {
            include: [{
                model : data.Producto,
                as: 'productos' 
            },
        ]
        })
        .then(usuario => {
            if (!usuario){
                return res.send("User not found");
            }
            


            return res.render("profile",{
                user : usuario.usuario,
                fotoDePerfil : usuario.fotodeperfil,
                email: usuario.email,
                cantidadProductos : usuario.productos.length,
                id : usuario.id,
                productos : usuario.productos,
                imagen_producto : usuario.productos.imagen_producto

            })
        
        });
    },
    profileEdit: function (req, res) {
        return res.render('profile-edit')
    },
    procesadorProfileEdit: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()){
        let form = req.body
        let id = req.params.id
        data.Usuario.update({
            email: form.email,
            usuario: form.usuario,
            contrasena: bcrypt.hashSync(form.contrasena, 10), 
            fecha: form.fecha,
            dni:form.dni,

        },
        {
            where: {
                id:id
            }
        }
    ).then(function (edit) {
            return res.redirect("/")})

    }else{
        res.render('profile-edit', {errors:errors.array(), old: req.body});

    }



    },  
    register: function (req, res) {
        //solo sirve para mostrar la vista
        if (req.cookies.usuarioLogueado || req.session.userSession) {
          return res.redirect("/");
        } else {return res.render("register", {})}
      },
      
      login: function (req, res) {
        if (req.cookies.usuarioLogueado){
          return res.redirect('/');
        } else {return res.render("login", {})}
      },
    
    
    store: function(req, res) {
        
        let errors = validationResult(req);
        if (errors.isEmpty()){
            let form = req.body
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
        } else{
            
            res.render('register', {errors:errors.array(), old: req.body});
        }
        },

    loginproceso: function (req,res) {
        let errors = validationResult(req);
        
        if (errors.isEmpty()){
            let bd = req.body;
            data.Usuario.findOne({where: {email:bd.email}})
            .then(function(userEncontrado){
                if(!userEncontrado){
                    return res.send("Not found");
                }
                if (bcrypt.compareSync(bd.contrasena, userEncontrado.contrasena)) {
                    if (req.body.recordarme !== undefined) {
                        console.log(userEncontrado.contrasena)
                      res.cookie("usuarioLogueado", userEncontrado, { maxAge: 1000 * 60 * 500 });
                    } else {
                      req.session.userSession = usuario;
                    }
                    return res.redirect("/");
                  } else {
                    return res.send("No coinciden contraseñas");
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            } else {
              return res.render("login", { errors: errors.array(), old: req.body });
            }
    },
    logout: function (req, res) {
        req.session.destroy()
        res.clearCookie("usuarioLogueado");
        return res.redirect("/");
    }

}    
module.exports = usuarioController