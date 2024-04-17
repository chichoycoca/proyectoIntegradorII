const db = require('../db')

const indexController = {
    index: function (req, res) {
        return res.render('index', {
            
        })
    }
}

module.exports = indexController