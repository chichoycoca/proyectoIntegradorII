const db = require('../db')
const router = require('../routes/productoRoute')

let productoController= {
    index: function(req,res){
        return res.render('index', {

        })
    },
    producto: function(req,res){
        return res.render('product', {
            
        })
    },   
}

module.exports= router