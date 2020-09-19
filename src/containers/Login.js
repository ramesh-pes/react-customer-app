import React, { Component } from "react";
import CustomerApp from "./CustomerApp";
import { Button, Form,Container, Row } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "admin",
      password: "admin",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    if (e.target.name === "email") {
      this.setState({
        email: e.target.value,
      });
    } else if (e.target.password === "password") {
      this.setState({
        password: e.target.value,
      });
    }
  }
  handleSubmit(e) {
    if (this.state.email === this.state.password) {
      localStorage.setItem('user',this.state.email)
      
      this.props.history.push("/home");
    } else {
      alert("InCorrect email or password, please try again");
    }
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <Container>
            <Row>
                
            </Row>
        </Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password"  value={this.state.password}
          onChange={this.handleChange}/>
          </Form.Group>
          
          <Button onClick={this.handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
      </div>
    );
  }
}

export default Login;
