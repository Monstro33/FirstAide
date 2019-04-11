import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Instructions from "./components/Instructions";
import SplashPage from "./components/SplashPage";
import Prompts from "./components/Prompts";
import MenuAppBar from "./components/MenuAppBar";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <MenuAppBar />
          <div className="content">
            <Route path="/" exact component={SplashPage} />
            <Route
              path="/instructions/:emergencyId/:ageGroupId/:instructionsId"
              component={Instructions}
            />
            <Route path="/prompts" exact component={Prompts} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
