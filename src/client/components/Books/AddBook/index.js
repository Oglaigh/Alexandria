import React , {useState} from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';

const AddBook = () => {
    const [titulo, setTitulo] = useState(null);
    const [autor, setAutor] = useState(null);
    
    const agregarLibro = async (e) => {
        e.preventDefault();
        // Logica para llamar al server
        if(titulo !== '' && autor !== '') {
            const res = await axios.post('http://localhost/api/books', 
                {
                    title: titulo,
                    author: autor,
                    user: JSON.parse(window.localStorage.getItem('user'))
                }
            );
            if(res.data.code === 200)
            {
                console.log('login exitoso');
            }
            console.log(res);
        }
    }
    return (
        <div className = "AddBook">
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Form onSubmit={agregarLibro}>
                <Form.Group >
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre del libro"
                    onChange={(evt) => {
                        setTitulo(evt.currentTarget.value)
                      }
                    }
                    /> 
                </Form.Group>

                <Form.Group >
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre del Autor"
                    onChange={(evt) => {
                        setAutor(evt.currentTarget.value)
                      }
                    }
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar libro
                </Button>
            </Form>
            </Card.Body>
        </Card>
        </div>
    );
}

export default AddBook;