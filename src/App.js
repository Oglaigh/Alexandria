import React,{Component} from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './client/components/Nav';
//import logo from './logo.svg';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
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
                  </tr>
                )
              })
            }
          </tbody>

        </table>
      </div>
    );
  };
}

export default App;
