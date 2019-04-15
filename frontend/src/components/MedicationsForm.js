import React from "react";
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

class MedicationsForm extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
        />
      </form>
    );
  }
}

MedicationsForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MedicationsForm);
