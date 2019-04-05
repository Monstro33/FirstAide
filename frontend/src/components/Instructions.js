import React, { Component } from "react";
import Markdown from "react-markdown";
import ChokingChild from "../markdown/Choking/ChokingChild/chokingConsciousChild.md";
import "../css/Instructions.css";

class Instructions extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentDidMount() {
    const { emergencyId, ageGroupId } = this.props.location.state;
    console.log(emergencyId, ageGroupId);
    fetch(ChokingChild)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
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
