import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Home = () => {
  return (
    <div id="home">
      <Container>
        <Row>
          <Col sm={3}>home</Col>
          <Col sm={9}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
