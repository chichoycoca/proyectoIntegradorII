
const db = require("../db/index")
const data = require ('../database/models')
let op = data.Sequelize.Op;
let {validationResult, cookie} = require("express-validator")

let productoController = {
    index: function (req,res) {
        return res.render("index", {index:db.producto}
        )}

    ,producto: function(req,res){
        return res.render('product', {  data:db.producto, user: db.usuario   })
         }
    ,productAdd: function(req,res){
        return res.render('product-add', {   nombre: db.usuario[1].email,nombreDeUsuario: db.usuario[1].usuario
            ,fotoDePerfil: db.usuario[1].fotoPerfil, email: db.usuario[1].email
            ,data:db.producto    })
        },
    buscador: function(req,res){
        let srch = req.query.search
        data.Producto.findAll(
        {
        where: {
            [op.or] : [
                {producto : {[op.like]: `%${srch}%`}},
                {descripcion : {[op.like]: `%${srch}%`}},
            ]}
        }
        )
        .then(resultados => {
            res.render('search-results', {
                productos: resultados,
                query: srch
            });
        })
    },
    crearProducto : function(req,res){
        let errors = validationResult(req);
        if (errors.isEmpty()){
        let form = req.body
        data.Producto.create({
            imagen_producto: form.imagen_producto,
            producto: form.producto,
            descripcion: form.descripcion
        
        }).then(function(producto) {
         return res.redirect("/")
        })
        .catch(error=>console.log(error))
    }else
    res.render('product-add',{errors:errors.array(), old: req.body})
    

    }

        
        
        
       
};

module.exports= productoController;