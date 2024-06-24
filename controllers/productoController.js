
const db = require("../db/index")
const data = require ('../database/models')
let {validationResult, cookie} = require("express-validator");
const { where } = require("sequelize");
const op = data.Sequelize.Op;


let productoController = {
    index: function (req,res) {
        data.Producto.findAll({
            include: [{
            model : data.Usuario,
            as : 'usuario'
            }],
            order: [['createdAt', 'DESC']],
            limit : 15
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
    
    },

    editProducto: function(req,res){
        const id_user = req.cookies.usuarioLogueado.id;
        const id_product = req.params.id_product;

        data.Producto.findByPk(id_product, {
            include: [{ model: data.Usuario, as: 'usuario' }]
        })
        .then(function(producto) {
            if (!producto) {
                return res.render('error', { 
                    message: 'Product not found' });
            }
            if (producto.id_user !== id_user) {
                return res.status(403).send("No podes editar esta publicacion");
            }
            res.render('product-edit', { 
                producto: producto,});
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        });
    },

    editedProducto: function(req,res){
        let errors = validationResult(req);
        if (errors.isEmpty()){
        let form = req.body;
        const id_product = req.params.id_product;
        const id_user = req.params.id_user;

        data.Producto.update({
            imagen_producto  : form.imagen_producto,
            producto : form.producto,
            descripcion : form.descripcion,
            updatedAt : new Date(),
        },{
            where : { id : id_product}
        })
        .then(function(result){
            return res.redirect(`/producto/${id_product}`);
        })
        .catch(function(error) {
            console.log(error); 
            return res.status(500).send("Hubo un error al editar el producto"); 
        });
    } else { 
        const id_user = req.params.id_user;
        const id_product = req.params.id_product;
    
        data.Producto.findByPk(id_product, {
            include: [{ model: data.Usuario, as: 'usuario' }]
        })
        .then(function(producto) {
            if (!producto) {
                return res.render('error', { message: 'Producto no encontrado' });
            }
            
            if (producto.id_user !== id_user) {
                return res.status(403).send("No tienes permiso para editar este producto");
            }
            res.render('product-edit', { producto: producto, errors: errors.array(), old: req.body });
        })
        .catch(function(error){
            console.error(error);
            res.status(500).send('Error interno del servidor');
        });
        }
    },
    borradoProducto: function(req,res){
        let id = req.body.id;
    let filtro = {where: [{id: id}]}
    data.Producto.destroy(filtro)
    .then(function (result) {
        
        return res.redirect('/')
    }).catch()
    }



        
        
        
       
};

module.exports= productoController;