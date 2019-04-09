import React, { Component } from "react";
import "../css/Prompts.css";
import { Link } from "react-router-dom";

class Prompts extends Component {
  constructor() {
    super();
    this.state = {
      emergencies: [],
      ageGroups: [],
      emergencyId: 0,
      ageGroupId: 0
    };
  }

  componentDidMount() {
    fetch("https://localhost:44321/api/emergency")
      .then(res => res.json())
      .then(json => this.setState({ emergencies: json }));
    fetch("https://localhost:44321/api/agegroup")
      .then(res => res.json())
      .then(json => this.setState({ ageGroups: json }));
  }

  emergencyClick = emergencyId => {
    const emergencyElements = document.querySelectorAll(".emergency");
    const ageGroupElements = document.querySelectorAll(".age-group");

    this.setState({ emergencyId: emergencyId });
    emergencyElements.forEach(function(item) {
      item.style.display = "none";
    });
    ageGroupElements.forEach(function(item) {
      item.style.display = "block";
    });
  };

  render() {
    const emergencyItems = this.state.emergencies.map(item => (
      <div
        className="prompt-button"
        onClick={() => this.emergencyClick(item.emergencyId)}
        key={item.emergencyId}
      >
        {item.name}
      </div>
    ));

    const ageGroupItems = this.state.ageGroups.map(item => (
      <div className="prompt-button">
        <Link
          to={`/instructions/${this.state.emergencyId}/${item.ageGroupId}`}
          key={item.ageGroupId}
        >
          {item.name}
        </Link>
      </div>
    ));

    return (
      <div className="prompts">
        <h1 className="emergency">What's the emergency?</h1>
        <h1 className="age-group">How old is the victim?</h1>
        <div className="emergency emergency-buttons">{emergencyItems}</div>
        <div className="age-group emergency-buttons">{ageGroupItems}</div>
      </div>
    );
  }
}

export default Prompts;
