import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class MedicationsForm extends Component {
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onNameChange = event => {
    this.props.setName(event.target.value);
  };

  onConcentrationChange = event => {
    this.props.setConcentration(event.target.value);
  };

  onDosageChange = event => {
    this.props.setDosage(event.target.value);
  };

  onPurposeChange = event => {
    this.props.setPurpose(event.target.value);
  };

  onNotesChange = event => {
    this.props.setNotes(event.target.value);
  };

  render() {
    const { classes } = this.props;
    const {
      medicationName,
      medicationConcentration,
      medicationDosage,
      medicationPurpose,
      medicationNotes
    } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="MedicationName"
          label="Medication Name (Required)"
          defaultValue="What is the name of the medication?"
          className={classes.textField}
          margin="normal"
          onChange={this.onNameChange}
          value={medicationName}
          type="text"
          variant="outlined"
        />

        <TextField
          id="MedicationConcentration"
          label="What is the concentration of the medication?"
          defaultValue="Concentration"
          className={classes.textField}
          margin="normal"
          onChange={this.onConcentrationChange}
          value={medicationConcentration}
          type="text"
          variant="outlined"
        />

        <TextField
          id="MedicationDosage"
          label="What is the dosage?"
          defaultValue="Dosage"
          className={classes.textField}
          margin="normal"
          onChange={this.onDosageChange}
          value={medicationDosage}
          type="text"
          variant="outlined"
        />

        <TextField
          id="MedicationPurpose"
          label="What is this medication for?"
          defaultValue="Purpose"
          className={classes.textField}
          margin="normal"
          onChange={this.onPurposeChange}
          value={medicationPurpose}
          type="text"
          variant="outlined"
        />

        <TextField
          id="MedicationNotes"
          label="Enter any extra information here."
          defaultValue="Notes"
          className={classes.textField}
          margin="normal"
          onChange={this.onNotesChange}
          value={medicationNotes}
          type="text"
          variant="outlined"
        />
      </form>
    );
  }
}

MedicationsForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MedicationsForm);
