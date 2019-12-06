import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import * as serviceWorker from './serviceWorker';


const logueado = false;

//TOD: ACA SE TIENE DEFINIR LA LOGICA CON LAS SESIONES Y EN CASO DE OK
ReactDOM.render(
    logueado ? <App/> : <Login/>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
