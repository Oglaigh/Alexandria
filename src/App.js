import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './client/components/Nav';
//import logo from './logo.svg';
import './App.css';
import AddBook from './client/components/Books/AddBook';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }


  eliminar(id){
    axios
      .delete(`http://localhost/api/books/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(error=>{
        console.log(error);
      })
  }

  editar(book){
    
  }


  componentDidMount(){
    axios
      .get('http://localhost/api/books')
      .then(res => {
        this.setState({
          books : res.data
        })
      })
      .catch(error=>{
        console.log(error);
      })
  }

  render(){
    console.log(this.state);
    return (
      <div className="App">
        <CustomNav></CustomNav>
        <Switch>
          <Route path='/books/new' component={AddBook}/>
          <Route exact path='' render={()=>{
            return (
              <table className = "table table-striped table-dark">
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Propietario</th>
                    <th>Fecha</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {
                    this.state.books.map((book)=>{
                      return (
                        <tr key={book._id}>
                          <td>{book.title}</td>
                          <td>{book.author}</td>
                          <td></td>
                          <td></td>
                          <td><Button onClick={()=>this.editar(book)} variant="warning">Editar</Button></td>
                          <td><Button onClick={()=>this.eliminar(book._id)} variant="danger">Eliminar</Button></td>
                        </tr>
                      )
                    })
                  }
                </tbody>

              </table>
            )
          }}/>          
        </Switch>
        
      </div>
    );
  };
}

export default App;
