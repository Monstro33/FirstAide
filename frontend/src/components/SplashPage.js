import React, { Component } from "react";
import "../css/SplashPage.css";
import { Link } from "react-router-dom";

class SplashPage extends Component {
  render() {
    return (
      <div className="splash-page">
        <h1>Is this an emergency?</h1>
        <div className="splash-buttons">
          <Link to="/prompts" className="yes">
            Yes
          </Link>
          <div className="no">No</div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
