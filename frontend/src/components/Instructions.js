import React, { Component } from "react";
import Markdown from "react-markdown/with-html";
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
    const {
      match: { params }
    } = this.props;

    for (let i = 0; i < this.state.instructions.length; i++) {
      if (params.emergencyId == 0 && params.ageGroupId == 0) {
        for (let j = 0; j < this.state.instructions.length; j++) {
          if (
            params.instructionsId == this.state.instructions[j].instructionsId
          ) {
            fetch(this.state.instructions[j].details)
              .then(res => res.text())
              .then(text => this.setState({ markdown: text }));
          }
        }
      } else if (
        params.emergencyId == this.state.instructions[i].emergencyId &&
        params.ageGroupId == this.state.instructions[i].ageGroupId
      ) {
        fetch(this.state.instructions[i].details)
          .then(res => res.text())
          .then(text => this.setState({ markdown: text }));
      }
    }
  };

  // cprLink = () => {
  //   const cprSpan = document.querySelector(".cpr-link");

  //   cprSpan.addEventListener("click", function(){
  //     this.setState({ emergencyId: 3, ageGroupId: 2 });
  //   });
  // }

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
        <Markdown source={markdown} escapeHtml={false} />
      </div>
    );
  }
}

export default Instructions;
