

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
            res.send('Error del servidor');
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
        {order: [['createdAt', 'DESC']],
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
                return res.send("No podes editar esta publicacion");
            }
            res.render('product-edit', { 
                producto: producto,});
        })
        .catch(error => {
            console.error(error);
            res.send('Error interno del servidor');
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
            return res.send("Hubo un error al editar el producto"); 
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
                return res.send("No tienes permiso para editar este producto");
            }
            res.render('product-edit', { producto: producto, errors: errors.array(), old: req.body });
        })
        .catch(function(error){
            console.error(error);
            res.send('Error interno del servidor');
        });
        }
    },
    borradoProducto: function(req,res){
        let id = req.params.id;
    data.Producto.findByPk(id)
    .then(producto => {
       return data.Producto.destroy({where:{id:id}})
    })
    .then(function () {
          return res.redirect('/')
    })
    },
    comentar: function (req, res){
        let errors = validationResult(req);
        let id = req.params.id;
        if (errors.isEmpty()){
        let form = req.body
        data.Producto.findByPk(id,  {include: [{
            association: 'usuario'
        }, {
            association: 'comentarios',
            include: [{ association: 'usuario' }],
            order: [['createdAt', 'DESC']]
        }] })

        data.Comentario.create({
            comentario: form.comentario,
            id_user : req.cookies.usuarioLogueado.id,
            id_post : id,
        
        }).then(function(comentario) {
         return res.redirect(`/producto/${id}`)
        })
        .catch(error=>console.log(error))
    }else{
        return res.render('producto', {
            producto: producto,
            errors: errors.array(),
            old: req.body
        })
    }}

    

        
        
        
       
};

module.exports= productoController;