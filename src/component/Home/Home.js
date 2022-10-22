import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image"
const Home = () => {
  return (
    <div id="home">
      <Container>
        
        <Row>
          <Col>
            <Image
              src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
              fluid
            ></Image>
          </Col>
          <Col>
            <Image
              src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
              fluid
            ></Image>
          </Col>
          <Col>
            <Image
              src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
              fluid
            ></Image>
          </Col>
          <Col>
            <Image
              src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
              fluid
            ></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
