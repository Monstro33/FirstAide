import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import "./css/App.css";
import Instructions from "./components/Instructions";
import SplashPage from "./components/SplashPage";
import Prompts from "./components/Prompts";
import Header from "./components/Header";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Auth from "./Auth/Auth";
import Callback from "./components/Callback";
import Dashboard from "./components/Dashboard";
import history from "./history";

class App extends Component {
  render() {
    const auth = new Auth();

    const handleAuthentication = (nextState, replace) => {
      if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
      }
    };

    const theme = createMuiTheme({
      palette: {
        primary: red
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <Router history={history}>
            <Header auth={auth} history={history} />
            <div className="content">
              <Route path="/" exact component={SplashPage} />
              <Route
                path="/instructions/:emergencyId/:ageGroupId/:instructionsId"
                component={Instructions}
              />
              <Route path="/prompts" exact component={Prompts} />
              <Route
                path="/callback"
                exact
                render={props => {
                  handleAuthentication(props);
                  return <Callback {...props} />;
                }}
              />
              <Route path="/dashboard" render={props => {
                return <Dashboard {...props} auth={auth} />
              }} />
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
