import React, { Component } from "react";
import "material-dashboard/assets/css/material-dashboard.css";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";

import WeightChart from "./WeightChart";

class Dashboard extends Component {
  render() {
    // const userId = this.props.auth.currentUser.userId;
    const userId = 1;

    return (
      <div className="dashboard">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <FileCopyOutlined />
                  </div>
                  <p class="card-category">Current Blood Pressure</p>
                  <h3 class="card-title">120/60</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    {/* <i class="material-icons text-danger">warning</i>
                    <a href="#pablo">Get More Space...</a> */}
                  </div>
                </div>
              </div>
              <WeightChart userId={userId} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
