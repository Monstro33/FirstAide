import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Instructions from "./components/Instructions";
import SplashPage from "./components/SplashPage";
import Prompts from "./components/Prompts";
import NavBar from "./components/NavBar";
import MenuAppBar from "./components/MenuAppBar";
import Login from "./components/Login";
// import Sidebar from "./components/Sidebar";
// import sidebarStyle from "./assets/jsm/components/sidebarStyle";

class App extends Component {
  render() {
    return (
      <div className="app">
    <Login />
      {/* <MenuAppBar /> */}
      {/* <Sidebar /> */}
      {/* <NavBar /> */}
        {/* <Router>
          <div className="header" />
          <div className="content">
            <Route path="/" exact component={SplashPage} />
            <Route
              path="/instructions/:emergencyId/:ageGroupId/:instructionsId"
              component={Instructions}
            />
            <Route path="/prompts" exact component={Prompts} />
          </div>
        </Router> */}
      </div>
    );
  }
}

export default App;
