import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './client/components/Login';
import CustomNav from './client/components/Nav'
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="MyLogin">
        <CustomNav></CustomNav>
      <Login></Login>
    </div>
  );
}

export default App;
