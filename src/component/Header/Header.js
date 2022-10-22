import React, { useContext } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Container>
        <Navbar bg="light" variant="light">
          
       

          <Nav className="ml-auto">
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/registration">
              Registration
            </Link>

            {/* {loggedInUser.email && loggedInUser.email !== "" ? (
              <button onClick={() => setLoggedInUser({})}>Logout</button>
            ) : (
              <Link className="nav-link" to="/login">
                <Button variant="warning">Login</Button>
              </Link>
            )} */}
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
