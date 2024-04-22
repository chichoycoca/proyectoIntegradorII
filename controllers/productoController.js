
const db= require("../db/index")

let productoController = {
    index: function (req,res) {
        return res.render("index", {index:db.producto}
        )}

    ,producto: function(req,res){
        return res.render('product', {  data:db.producto   })
         }
    ,productAdd: function(req,res){
        return res.render('product-add', {   nombre: db.usuario[1].email    })
        }
        
        
       
};

module.exports= productoController;