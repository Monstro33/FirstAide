import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Notes from "./Notes";

class HealthLog extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      noteInput: ""
    };
  }

  setNotes = text => {
    this.setState({ userNote: text });
  };

  addNote = () => {
    const newNote = {
      noteInput: this.state.NoteInput
    };

    fetch("https://localhost:44321/api/note", {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          const allNotes = [...this.state.notes, newNote];
          this.setState({ notes: allNotes });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  componentDidMount() {
    fetch("https://localhost:44321/api/note")
      .then(res => res.json())
      .then(json => this.setState({ notes: json }));
  }

  render() {
    const { addNote } = this.props;
    const noteList = this.state.notes.map(listNote => (
      <li key={listNote.id}>{listNote.noteInput}</li>
    ));

    return (
      <div id="healthLogPage">
        <ul id="notes">{noteList}</ul>
        <Notes />
        <button id="NotesButton" onClick={addNote}>
          Add Note
        </button>
      </div>
    );
  }
}
export default HealthLog;
