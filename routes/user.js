const express = require('express');
const User = require('../model/User');
const router = express.Router();
const bcrypt = require('bcryptjs');


/* GET users listing. */
router.get('/register', function(req, res, next) {
    res.render('register', {title: "Ro'yhatdan o'tish"});
});


router.post('/register', function(req, res, next) {
    req.checkBody('name', 'Ism kiritilmadi').notEmpty()
    req.checkBody('username', 'Username kiritilmadi').notEmpty()
    req.checkBody('email', 'email manzil kiritilmadi').notEmpty()
    req.checkBody('password', 'Parol kiritilmadi').notEmpty()
    req.checkBody('password2', 'Parol qayta kiritilmadi').equals(req.body.password).notEmpty()

    const errors = req.validationErrors()

    if(errors){
        res.render('register',  {
            title: "Ro'yhatdan o'tishda hato",
            errors : errors
        })
    }else{

        const newuser = new User({
            name: name,
            username: username,
            email: email,
            password: password,
        })
    
        const name = req.body.name
        const username = req.body.username
        const email = req.body.email
        const password = req.body.password
        
        bcrypt.genSalt(10, (err, pass) => {
            bcrypt.hash(newuser.password, password, pass, (err, hash) => {
                if(err) console.log(err);
                newuser.password = hash;
                newuser.save((err) => {
                    if(err) console.log(err);
                    else{
                        req.flash("success", "Ro`yhatdan o`tdingiz");
                        res.render('/login');
                    }
                })
            })
        })
        
    }
});







router.get('/login', function(req, res, next) {
    res.render('login', {title: "Saytga kirish"});
});


module.exports = router