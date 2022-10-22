import { queryAllByAttribute } from "@testing-library/react";
import React,{ useState} from "react";
import { Form,Button, Container, Row } from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {login} from "../../auth/authSlice"
import { useNavigate} from "react-router-dom"
const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log ("inside handleSubmit")
    if(username && password) {
      if (auth.user.username == username && auth.user.password == password) {
        dispatch(login());
      navigate("/");
      } else {
        alert("Credential did not match");
      }
     
    } else {
      alert("Wrong Credential");
    }
  };
  return (
    <div id="login">
      <Container>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="button" onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
