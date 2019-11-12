const express = require('express');
const morgan = require('morgan');
const path = require('path');

const server = express();

const { mongoose } = require('./database');

//Settings
server.set('port', process.env.port || 8080)
server.use(express.static(path.join(__dirname, 'build')));

//Middlewares
server.use(morgan('dev'));
server.use(express.json());

//Routes
server.use('/api/books',require('./routes/books_routes'))

//Statics Files
server.use(express.static(path.join(__dirname, 'public')));

server.get('/ping', function (req, res) {
    return res.send('pong');
   });

   server.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
  server.listen(process.env.PORT || 8080,()=>{
    console.log(`Server on port: ${server.get('port')}`);
  });
  