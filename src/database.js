const mongoose = require('mongoose');
const uri = 'mongodb://localhost/Alexandria';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('DataBase is connected...'))
    .catch(err => console.error(err));


module.exports = mongoose;