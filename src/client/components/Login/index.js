import React , {useState} from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
    const [usuario, setUsuario] = useState("andrada.flavio@outlook.com");
    const [password, setPassword] = useState("fa123");
    
    const loguearse = async (e) => {
        e.preventDefault();
        // Logica para llamar al server
        if(usuario !== '' && password !== '') {
            const res = await axios.post('http://localhost/api/login', {email: usuario, password: password});
            console.log(res);

            if(res.data){
                window.localStorage.setItem('user',JSON.stringify( res.data.user));
                window.localStorage.setItem('token', res.data.token);
            }
        }
    }
    return (
        <div className = "MyLogin">
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Form onSubmit={loguearse}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correro Electrónico</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email"
                    onChange={(evt) => {
                        setUsuario(evt.currentTarget.value)
                      }
                    }
                    /> 
                    <Form.Text className="text-muted">
                    Nunca compartas tu dirección de correo electrónico con nadie.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control name= "password" type="password" placeholder="Password"
                    onChange={(evt) => {
                        setPassword(evt.currentTarget.value)
                      }
                    }
                    autoComplete = "true"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Mantener sesión" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Login;