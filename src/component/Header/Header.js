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
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../auth/authSlice";

const Header = () => {
    const auth = useSelector((state) => state.auth);
 const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <Navbar bg="light" variant="light">
          <Nav className="ml-auto">

            {auth.isAuthenticated === true && auth.isAuthenticated !== "" ? (
              <button onClick={() => {
                dispatch(logout());
              }}>Logout</button>
            ) : (
              <div>
              <Link className="nav-link" to="/login">
                <Button variant="warning">Login</Button>
              </Link>
              <Link className="nav-link" to="/registration">
              Registration
            </Link>
            </div>
            )}
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
