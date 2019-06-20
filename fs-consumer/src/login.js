import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super();
        this.switchPage = this.switchPage.bind(this);
    }
    render() {
        return (
            <div className="text-center" style={{ padding: 20 }}>
                <h1>Login</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button class="center" variant="primary" type="submit" onClick={this.switchPage}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
    switchPage() {
        this.props.history.push('/home');
    }
}

export default withRouter(Login);