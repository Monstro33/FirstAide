import React, { Component } from "react";
import "../css/Prompts.css";

class Prompts extends Component {
  constructor() {
    super();
    this.state = {
      emergencies: []
    };
  }

  componentDidMount() {
    fetch("https://localhost:44321/api/emergency")
      .then(res => res.json())
      .then(json => this.setState({ emergencies: json }));
  }

  render() {
    const emergencyItems = this.state.emergencies.map(item => (
      <div className="prompt-button">{item.name}</div>
    ));

    return (
      <div className="prompts">
        <h1>What's the emergency?</h1>
        <div className="prompts-buttons">{emergencyItems}</div>
      </div>
    );
  }
}

export default Prompts;
