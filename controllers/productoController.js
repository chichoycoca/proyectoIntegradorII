
let productoController = {
    
    producto: function(req,res){
        return res.render('product', {       })
    },
    productAdd: function(req,res){
        return res.render('product-add', {       })
    }
}

module.exports = productoController