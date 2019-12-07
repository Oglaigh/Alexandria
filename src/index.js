import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import './index.css';
import App from './App';
import Login from './Login';
import * as serviceWorker from './serviceWorker';


const logueado = window.localStorage.getItem('token')? true : false;



//TOD: ACA SE TIENE DEFINIR LA LOGICA CON LAS SESIONES Y EN CASO DE OK
ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route exact path='/' component={() => {
                return logueado ? <App/> : <Redirect to='/login'/>
            }}/>
            <Route path='*' component={()=><Redirect to='/'/>}
            />
        </Switch>
    </Router>
    , document.getElementById('root'));

    //logueado ? <App/> : <Login/>
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
