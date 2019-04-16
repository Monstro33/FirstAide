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
import MedicationsView from "./components/MedicationsView";
import Main from "./components/Main";
import AddressForm from "./components/AddressForm";
import Dashboard from "./components/Dashboard";
import history from "./history";

class App extends Component {
  constructor() {
    super();
    this.state = {
      medicationName: "",
      medicationConcentration: "",
      medicationDosage: "",
      medicationPurpose: "",
      medicationNotes: "",

      medications: []
    };
  }

  setName = text => {
    this.setState({ medicationName: text });
  };

  setConcentration = text => {
    this.setState({ medicationConcentration: text });
  };

  setDosage = text => {
    this.setState({ medicationDosage: text });
  };

  setPurpose = text => {
    this.setState({ medicationPurpose: text });
  };

  setNotes = text => {
    this.setState({ medicationNotes: text });
  };

  addMedication = () => {
    const newMedication = {
      medicationName: this.state.medicationName,
      medicationConcentration: this.state.medicationConcentration,
      medicationDosage: this.state.medicationDosage,
      medicationPurpose: this.state.medicationPurpose,
      medicationNotes: this.state.medicationNotes
    };

    fetch("https://localhost:44321/api/medication", {
      method: "POST",
      body: JSON.stringify(newMedication),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          const allMedications = [...this.state.medications, newMedication];
          this.setState({ medications: allMedications });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

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

    //   <MedicationsView
    //   setName={this.setName}
    //   setConcentration={this.setConcentration}
    //   setDosage={this.setDosage}
    //   setPurpose={this.setPurpose}
    //   setNotes={this.setNotes}
    //   addMedication={this.addMedication}
    // />

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
              <Route
                path="/dashboard"
                render={props => {
                  return <Dashboard {...props} auth={auth} />;
                }}
              />
            </div>
          </Router> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
