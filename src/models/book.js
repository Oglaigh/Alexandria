const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    library: {type: String, required: false},
    owner: {type: String, required: true},
    owned: {type: Date, required: false}
})

module.exports = mongoose.model('Book', BookSchema);