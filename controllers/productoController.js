
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
        let srch = req.query.search
        db.Producto.findAll(
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
    }
        

        
        
        
       
};

module.exports= productoController;