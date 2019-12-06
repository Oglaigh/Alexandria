import React from 'react';
import { Button, Form, Card } from 'react-bootstrap';


class MyLogin extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: ''
        }
        // this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    // handleChange(event) {
    //     this.setState({user: event.target.user});
    //     this.setState({password: event.target.password});
    //   }

    login(e){
        this.setState({user: e.target.user});
        this.setState({password: e.target.password});
        console.log(this.state);
        
        e.preventDefault();
    }

    render(){
        return (
            <div className = "MyLogin">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Form onSubmit={this.login}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.user}/> 
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name= "password" type="password" placeholder="Password" value={this.state.password} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                </Card.Body>
            </Card>
            </div>
        )
    }
}

export default MyLogin;