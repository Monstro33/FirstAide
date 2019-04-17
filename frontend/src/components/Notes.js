import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

class Notes extends Component {
  onNoteChange = event => {
    this.props.setNotes(event.target.value);
  };

  render() {
    const { userNote } = this.props;

    return (
      <card>
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header card-header-danger">
                <h4 class="card-title">Full header coloured</h4>
                <p class="category">Category subtitle</p>
              </div>
              <div class="card-body">
                <TextField
                  id="UserNote"
                  label="Note"
                  defaultValue="Note?"
                  // className={classes.textField}
                  margin="normal"
                  onChange={this.onNoteChange}
                  value={userNote}
                  type="text"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
        </div>
      </card>
    );
  }
}

Notes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Notes;
