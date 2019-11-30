const express = require('express');
const router = express.Router();

const Books = require('../models/book');

//Get Users
router.get('/', async (req, res) => {
    const book = await Books.find();
    console.log(book);
    res.json(book);
});

//POST User
router.post('/', async (req, res) => {
    const {title, author, library,owner,owned} = req.body;
    const book = new Books({
        title: title,
        author: author,
        library: library,
        owner: owner,
        owned: owned
    });
    console.log(book);
    await book.save();
    res.json({status: 'Book successfully added!'});
});

//PUT User

router.put('/:id', async (req, res) => {
    const {title, author, library,owner,owned} = req.body;
    const newBook = {
        title,
        author,
        library,
        owner,
        owned
    };
    await Books.findByIdAndUpdate(req.params.id, newBook);
    res.json({status: 'Book successfully updated!'});
})

router.delete('/:id', async (req, res)=>{
    await Books.findByIdAndDelete(req.params.id);
    res.json({status: 'Book successfully deleted!'});
});

router.get('/:id', async (req, res) => {
    const book = await Books.findById(req.params.id);
    res.json(book);
});

router.get('/:title', async (req, res) =>{
    const book = await Books.find(x => x.title == req.params.title);
    res.json(book);
})


module.exports = router;