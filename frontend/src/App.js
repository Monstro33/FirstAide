import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./css/App.css";
import Markdown from "react-markdown";
import ChokingChild from "./markdown/ChokingChild/chokingConsciousChild.md";
import Instructions from "./components/Instructions";
import SplashPage from "./components/SplashPage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
        
        </div>
        <div className="content">
        {/* <SplashPage /> */}
        <Instructions />
        </div>
      </div>
    );
  }
}

export default App;
