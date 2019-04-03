import React, { Component } from "react";
import "./css/App.css";
import Markdown from "react-markdown";
import ChokingChild from "./markdown/chokingChild.md";
import Instructions from "./components/Instructions";
import SplashPage from "./components/SplashPage";

class App extends Component {
  render() {
    return (
      <div>
        <SplashPage />
        {/* <Instructions /> */}
      </div>
    );
  }
}

export default App;
