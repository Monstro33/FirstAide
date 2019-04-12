import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Instructions from "./components/Instructions";
import SplashPage from "./components/SplashPage";
import Prompts from "./components/Prompts";
import Header from "./components/Header";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import MedicationsView from "./components/MedicationsView";

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
          <MedicationsView />
          {/* <Router>
            <Header />
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
      </MuiThemeProvider>
    );
  }
}

export default App;
