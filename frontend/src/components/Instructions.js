import React, { Component } from "react";
import Markdown from "react-markdown";
import ChokingChild from "../markdown/Choking/ChokingChild/chokingConsciousChild.md";
import "../css/Instructions.css";

class Instructions extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    fetch(ChokingChild)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return <Markdown source={markdown} className="instructions" />;
  }
}

export default Instructions;
