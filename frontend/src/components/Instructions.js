import React, { Component } from "react";
import Markdown from "react-markdown";
import ChokingChild from "../markdown/Choking/ChokingChild/chokingConsciousChild.md";
import "../css/Instructions.css";
import "../Video.js";

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
        <div id="video_container">
          <video id="video" controls="controls">
            <source src="/Videos/childChoking.mp4" type="video/mp4" />
          </video>
          <div id="controls">
            <button id="playpause" title="play" onClick="togglePlayPause()" />
            &#x25BA;
            <input
              id="volume"
              min="0"
              max="1"
              step="0.1"
              type="range"
              onChange="setVolume()"
            />
          </div>
        </div>
        <Markdown source={markdown} />
      </div>
    );
  }
}

export default Instructions;
