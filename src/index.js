import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//const express = require('express');
//const morgan = require('morgan');

//Middlewares
//Morgan permite ver por consola las peticiones realizadas por el navegador (cliente)


//const { mongoose } = require('./database');


ReactDOM.render(<App />, document.getElementById('root'));

//const express = require('express');
//const app = express();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
