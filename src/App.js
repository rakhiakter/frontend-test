import "./App.css";

import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Registration from './component/Registration/Registration';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/* <Routes> */}
        <Route exact path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        {/* </Routes> */}
      </Routes>
    </div>
  );
}

export default App;
