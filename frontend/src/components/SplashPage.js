import React, { Component } from "react";
import "../css/SplashPage.css";

class SplashPage extends Component {
  render() {
    return (
      <div className="splash-page">
        <h1>Is this an emergency?</h1>
        <div className="splash-buttons">
          <div className="yes">Yes</div>
          <div className="no">No</div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
