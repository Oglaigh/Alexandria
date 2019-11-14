import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './client/components/Nav';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNav></CustomNav>
      <table className = "table table-striped table-dark">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Propietario</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
