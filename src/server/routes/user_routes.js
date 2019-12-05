const express = require('express');

const bcrypt = require('bcrypt');
const _ = require('underscore');

const router = express.Router();

const User = require('../models/user');

//GET User (Paginado)
router.get('/', async (req, res) => {
    
    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limit = Number(limite);

    User.find({})
        .skip(desde)
        .limit(limite)
        .exec( (err, users) => {

            if(err){
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            console.log(users);
            User.count({}, (err,cont) =>{

                res.json({
                    ok:true,
                    users,
                    total: cont
                })
            })
        });
});

//POST User
router.post('/', async (req, res) => {
    const {name, email, password,google,role,img,status} = req.body;

    let user = new User({
        name : name,
        email : email,
        password : bcrypt.hashSync(password, 10),
        google : google,
        role : role,
        img : img,
        status : status
    })

    console.log(user);
    await user.save((err, userDB) => {
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok:true,
            user : userDB,
            status: 'User successfully created!'
        })
    });
})

//PUT User
router.put('/:id', async (req, res) => {
    
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);

    User.findByIdAndUpdate(id ,body,{new: true, runValidators: true}, (err, userDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            user: userDB
        });
    });
})

module.exports = router;