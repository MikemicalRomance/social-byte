import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Login from "./screens/Login";
import Navigate from "./screens/Navigate";
import Stats from "./screens/Stats";
import Profile from "./screens/Profile";
import Walkthrough from "./screens/Walkthrough";
import Stats1 from "./screens/Stats1";
import Stats2 from "./screens/Stats2";
import Login1 from "./screens/Login1";
import Navigate1 from "./screens/Navigate1";
import Stats3 from "./screens/Stats3";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login1} />
      <Route path="/Login/" exact component={Login} />
      <Route path="/Navigate/" exact component={Navigate} />
      <Route path="/Stats/" exact component={Stats} />
      <Route path="/Profile/" exact component={Profile} />
      <Route path="/Walkthrough/" exact component={Walkthrough} />
      <Route path="/Stats1/" exact component={Stats1} />
      <Route path="/Stats2/" exact component={Stats2} />
      <Route path="/Login1/" exact component={Login1} />
      <Route path="/Navigate1/" exact component={Navigate1} />
      <Route path="/Stats3/" exact component={Stats3} />
    </Router>
  );
}

export default App;
