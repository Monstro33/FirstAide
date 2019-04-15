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

// const rows = [
//   this.state.medications.map(med =>
//     this.createData(
//       med.MedicationName,
//       med.Concentration,
//       med.Dosage,
//       med.Purpose,
//       med.Notes
//     )
//   )
// ];

let id = 0;

class MedicationsView extends Component {
  constructor() {
    super();
    this.state = {
      medications: []
    };
  }

  componentDidMount() {
    fetch("https://localhost:44321/api/medication")
      .then(res => res.json())
      .then(json => this.setState({ medications: json }));
  }

  createData(medication, dosage, purpose, concentration, notes) {
    id += 1;
    return { id, medication, dosage, purpose, concentration, notes };
  }

  render() {
    //   const rows = [
    //     this.state.medications.map(med =>
    //       this.createData(
    //         med.MedicationName,
    //         med.Concentration,
    //         med.Dosage,
    //         med.Purpose,
    //         med.Notes
    //       )
    //     )
    //   ];

    const { classes } = this.props;
    const real = this.state.medications.map(med => (
      <TableRow key={med.id}>
        <TableCell component="th" scope="row">
          {med.medicationName}
        </TableCell>
        <TableCell align="left">{med.concentration}</TableCell>
        <TableCell align="left">{med.dosage}</TableCell>
        <TableCell align="left">{med.purpose}</TableCell>
        <TableCell align="left">{med.notes}</TableCell>
      </TableRow>
    ));
    console.log(this.state.medications);
    console.log(real);

    return (
      <div>
        <Typography
          variant="h2"
          color="inherit"
          align="center"
          //padding="20px"
          //className={classes.grow}
        >
          Your Medications
        </Typography>

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
        {
          <MedicationsForm
            setName={this.props.setName}
            setConcentration={this.props.setConcentration}
            setDosage={this.props.setDosage}
            setPurpose={this.props.setPurpose}
            setNotes={this.props.setNotes}
            addMedication={this.props.addMedication}
          />
        }
      </div>
    );
  }
}

export default withStyles(styles)(MedicationsView);
