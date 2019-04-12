import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

  createData(medication, dosage, purpose, directions) {
    id += 1;
    return { id, medication, dosage, purpose, directions };
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

    const real = this.state.medications.map(med => (
      <TableRow key={med.id}>
        <TableCell component="th" scope="row">
          {med.medicationName}
        </TableCell>
        <TableCell align="right">{med.dosage}</TableCell>
        <TableCell align="right">{med.purpose}</TableCell>
        <TableCell align="right">{med.concentration}</TableCell>
      </TableRow>
    ));
    console.log(this.state.medications);
    console.log(real);

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Medication</TableCell>
              <TableCell align="right">Dosage</TableCell>
              <TableCell align="right">Purpose</TableCell>
              <TableCell align="right">Directions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{real}</TableBody>
        </Table>
      </Paper>
    );
  }
}

export default MedicationsView;
