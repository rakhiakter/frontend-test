import React from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
const Registration = () => {
  return (
    <div id="registration">
      <Container>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" /> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder=" ConfirmPassword" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
