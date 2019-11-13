
require('./config/config');

const express = require('express');
const server = express();
const path = require('path');
const bodyParser = require('body-parser')

//Conexion a la Base de Datos
require('../database');

//Settings
server.set('port', process.env.port)
server.use(express.static(path.join(__dirname, 'build')));

/*Middlewares*/
server.use(express.json());
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
server.use(bodyParser.json())


/*Routes*/
server.use('/api/books',require('./routes/books_routes'))
server.use('/api/user',require('./routes/user_routes'))


//Statics Files
server.use(express.static(path.join(__dirname, 'public')));

server.get('/ping', function (req, res) {
  return res.send('pong');
});

server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

  server.listen(process.env.PORT,()=>{
  console.log(`Server running on port: ${server.get('port')}`);
});
  