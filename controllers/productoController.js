
const db = require("../db/index")
const data = require ('../database/models')
let {validationResult, cookie} = require("express-validator")
const op = data.Sequelize.Op;


let productoController = {
    index: function (req,res) {
        data.Producto.findAll({
            include: [{
            model : data.Usuario,
            as : 'usuario'
            }],
            order: [['createdAt', 'DESC']],
            limit : 5
        })
        .then(productos => {
            console.log(productos);
            res.render('index', {productos: productos} );
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error del servidor');
        });
    }

    ,detalleProducto: function(req,res){
       let idProducto = req.params.id
       data.Producto.findByPk(idProducto, {
        include:[{ association: 'usuario'},{association: "comentarios", include: [{association:'usuario'}]}

        ]

       })
       .then(function(productos) {
        
        return res.render('product', { producto: productos})
       })    
       
       //return res.render('product', {  data:db.producto, user: db.usuario   })
    
    }
    ,productAdd: function(req,res){
        if (req.cookies.usuarioLogueado !== undefined){
            return res.render('product-add')
        }else{
            return res.redirect('/usuario/login')
        }
        
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
            })
        })
    },
    crearProducto : function(req,res){
        let errors = validationResult(req);
        if (errors.isEmpty()){
        let form = req.body
        data.Producto.create({
            imagen_producto: form.imagen_producto,
            producto: form.producto,
            descripcion: form.descripcion,
            id_user : req.cookies.usuarioLogueado.id,
        
        }).then(function(producto) {
         return res.redirect("/")
        })
        .catch(error=>console.log(error))
    }else
    res.render('product-add',{errors:errors.array(), old: req.body})
    
    }

        
        
        
       
};

module.exports= productoController;