
const data= require("../db/index")

let productoController = {
    index: function (req,res) {
        return res.render("product", {producto:data.producto}
        )}
        ,producto: function(req,res){
            return res.render('product', {       })
         }
        ,productAdd: function(req,res){
            return res.render('product-add', {       })
        }
        
        
       
};

module.exports= productoController;