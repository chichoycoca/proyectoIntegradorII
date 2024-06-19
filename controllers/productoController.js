
const db= require("../db/index")

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
        let query = req.query.search
        db.modeloProducto.findAll(
        {

        where: {
            [op.or] : [
                {producto : {[op.like]: `%${query}%`}},
                {descripcion : {[op.like]: `%${query}%`}},
            ]}


        }

        )}
        
        
        
       
};

module.exports= productoController;