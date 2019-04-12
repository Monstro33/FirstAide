import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Instructions from "./components/Instructions";
import SplashPage from "./components/SplashPage";
import Prompts from "./components/Prompts";
import MenuAppBar from "./components/MenuAppBar";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: red
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    );
  }
}

export default App;
