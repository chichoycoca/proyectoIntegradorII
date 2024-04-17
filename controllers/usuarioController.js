var express = require('express');
var router = express.Router();

let usuarioController = {
    login: function (req, res) {
        return res.render('login', {})
    },
    profile: function (req, res) {
        return res.render('profile', {})
    },
    profileEdit: function (req, res) {
        return res.render('profile-edit', {})
    },
    register: function (req, res) {
        return res.render('register', {})
    },   
    
}

module.exports = usuarioController