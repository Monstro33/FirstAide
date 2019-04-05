import React, { Component } from "react";
import Markdown from "react-markdown";
import "../css/Instructions.css";

class Instructions extends Component {
  constructor() {
    super();
    this.state = { 
      instructions: [],
      markdown: "" 
    };
  }

  setInstructions = () => {
    const { emergencyId, ageGroupId } = this.props.location.state;

    for(let i = 0; i<this.state.instructions.length; i++ ){
      if(emergencyId == this.state.instructions[i].emergencyId && ageGroupId == this.state.instructions[i].ageGroupId){
        fetch(this.state.instructions[i].details)
          .then (res => res.text())
          .then (text => this.setState({ markdown: text}));
      }
    }
  }

  componentDidMount() {
    fetch("https://localhost:44321/api/instructions")
      .then(res => res.json())
      .then(json => this.setState({ instructions: json }))
      .then(this.setInstructions);
  }

  render() {
    const { markdown } = this.state;
    return (
      <div className="instructions">
        <video controls="controls">
          <source src="/Videos/childChoking.mp4" type="video/mp4" />
        </video>
        <Markdown source={markdown} />
      </div>
    );
  }
}

export default Instructions;
