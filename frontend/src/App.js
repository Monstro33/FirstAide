import React, { Component } from "react";
import "./css/App.css";
import Markdown from "react-markdown";
import ChokingChild from "./markdown/chokingChild.md";
import Instructions from "./components/Instructions";

class App extends Component {

  render() {
    return (
      <Instructions />
    );
  }
}

export default App;
