const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
    const user = await User.find();
    console.log(user);
    res.json(user);
});


router.post('/', async (req, res) => {
    const {name, email, password,google,role,img,status} = req.body;
    const user = new User({
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
            user : userDB
        })
    });
})

module.exports = router;