import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './client/components/Nav';
//import logo from './logo.svg';
import './App.css';
import AddBook from './client/components/Books/AddBook';

const usuario = JSON.parse( window.localStorage.getItem('user'));


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }

  

  eliminar(id){
    axios
      .delete(`ec2-52-91-188-152.compute-1.amazonaws.com:4000/api/books/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(error=>{
        console.log(error);
      })
  }

  ceder(book){
    axios
      .put(`ec2-52-91-188-152.compute-1.amazonaws.com:4000/api/books/${book._id}`,
      {
        title: book.title,
        author: book.author,
        user: book.requestUser,
        requested: false,
        owned: new Date()
        
      })
      .then(res =>{
        console.log(res);
      })
      .catch(error=>{
        console.log(error);
      })
  }

  solicitar(book){
    axios
      .put(`ec2-52-91-188-152.compute-1.amazonaws.com:4000/api/books/${book._id}`,
      {
        title: book.title,
        author: book.author,
        user: book.user,
        requested: true,
        requestUser: usuario,
        owned: book.owned
        
      })
      .then(res =>{
        console.log(res);
      })
      .catch(error=>{
        console.log(error);
      })
  }


  componentDidMount(){
    
    axios
      .get('ec2-52-91-188-152.compute-1.amazonaws.com:4000/api/books')
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
                          <td>{book.user.name}</td>
                          <td>{book.owned}</td>
                          <Switch>
                            <Route component={()=>{
                              return usuario._id === book.user._id ?
                              <Route component={()=>{
                                return book.requested === true ?
                                <td><Button onClick={()=>this.ceder(book)} variant="success">Ceder</Button></td>
                                : <td><Button onClick={()=>this.eliminar(book._id)} variant="danger">Eliminar</Button></td>
                              }}/>
                              :
                              <Route component={()=>{
                                return book.requested === true?
                                <td><Button variant="secondary" disabled>Solicitar</Button></td>
                                : <td><Button onClick={()=>this.solicitar(book)} variant="warning">Solicitar</Button></td>
                              }}/> 
                              
                            }}
                            />
                          </Switch>
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
