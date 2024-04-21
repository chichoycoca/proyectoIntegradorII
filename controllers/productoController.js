
const db = require('../db/index')

let productoController = {
    index: function (req,res) {
        return res.render("product", {
            index:db.producto}
        )}
    
     ,producto: function(req,res){
        return res.render('product', {       })
     }
    ,productAdd: function(req,res){
        return res.render('product-add', {       })
    }
}

module.exports = productoController