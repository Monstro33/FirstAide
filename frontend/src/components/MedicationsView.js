import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../css/MedicationsView.css";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import MedicationsForm from "./MedicationsForm.js";
import Typography from "@material-ui/core/Typography";
import { EditorFormatAlignCenter } from "material-ui/svg-icons";

const styles = {
  root: {
    background: "red",
    flexGrow: 1
  }
};

class MedicationsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medications: [],
      medicationName: "",
      medicationConcentration: "",
      medicationDosage: "",
      medicationPurpose: "",
      medicationNotes: ""
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

  addMedication = id => {
    const newMedication = {
      userId: id,
      medicationName: this.state.medicationName,
      concentration: this.state.medicationConcentration,
      dosage: this.state.medicationDosage,
      purpose: this.state.medicationPurpose,
      notes: this.state.medicationNotes
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

  onAdd = () => {
    const userId = this.props.auth.currentUser.userId;
    this.addMedication(userId);
  };

  componentDidMount() {
    fetch("https://localhost:44321/api/medication")
      .then(res => res.json())
      .then(json => this.setState({ medications: json }));
  }

  render() {
    const userId = this.props.auth.currentUser.userId;
    const real = this.state.medications.map(function(med) {
      if (med.userId == userId) {
        return (
          <TableRow key={med.id}>
            <TableCell component="th" scope="row">
              {med.medicationName}
            </TableCell>
            <TableCell align="left">{med.concentration}</TableCell>
            <TableCell align="left">{med.dosage}</TableCell>
            <TableCell align="left">{med.purpose}</TableCell>
            <TableCell align="left">{med.notes}</TableCell>
          </TableRow>
        );
      }
    });

    return (
      <div id="MedicationsPage">
        <div id="MedicationsTitle">
          <Typography
            variant="h2"
            color="inherit"
            align="center"
            //padding="20px"
            //className={classes.grow}
          >
            Your Medications
          </Typography>
        </div>
        <div id="MedicationsTable">
          <Paper className="paper">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h2>Medication</h2>
                  </TableCell>
                  <TableCell align="left">
                    <h2>Concentration</h2>
                  </TableCell>
                  <TableCell align="left">
                    <h2>Dosage</h2>
                  </TableCell>
                  <TableCell align="left">
                    <h2>Purpose</h2>
                  </TableCell>
                  <TableCell align="left">
                    <h2>Notes</h2>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{real}</TableBody>
            </Table>
          </Paper>
        </div>
        <div id="MedicationsForm">
          {
            <MedicationsForm
              setName={this.setName}
              setConcentration={this.setConcentration}
              setDosage={this.setDosage}
              setPurpose={this.setPurpose}
              setNotes={this.setNotes}
              addMedication={this.addMedication}
            />
          }
        </div>
        <button id="MedicationsButton" onClick={this.onAdd}>
          Add Medication
        </button>
      </div>
    );
  }
}

export default withStyles(styles)(MedicationsView);
