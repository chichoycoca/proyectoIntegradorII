
const data = require('../db/index')
const db = require('../db/index')

const indexController = {
    index: function (req, res) {
        return res.render('index', { 
            
        })
    }
}

module.exports = indexController