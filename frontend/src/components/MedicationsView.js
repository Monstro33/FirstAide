import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});
const theme = createMuiTheme({
  palette: {
    primary: red
  }
});

let id = 0;
function createData(medication, dosage, purpose, directions) {
  id += 1;
  return { id, medication, dosage, purpose, directions };
}

const rows = [
  createData("Simvastatin", "20mg", "Cholestorol", "1 pill at night"),
  createData(
    "Furosemide",
    "20mg",
    "Fluid",
    "2 pills in the morning and 2 pills at night"
  ),
  createData(
    "Insulin",
    "X",
    "Diabetes",
    "Inject 24 units before breakfast and 12 units before dinner"
  )
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Medication</TableCell>
              <TableCell align="right">Dosage</TableCell>
              <TableCell align="right">Purpose</TableCell>
              <TableCell align="right">Directions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.medication}
                </TableCell>
                <TableCell align="right">{row.dosage}</TableCell>
                <TableCell align="right">{row.purpose}</TableCell>
                <TableCell align="right">{row.directions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </MuiThemeProvider>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
