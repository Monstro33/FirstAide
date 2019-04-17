import React, { Component } from "react";
import "material-dashboard/assets/css/material-dashboard.min.css";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined"; 

class Dashboard extends Component {
  render() {
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
                  <p class="card-category">Current Weight</p>
                  <h3 class="card-title">
                    210
                    <small>lbs</small>
                  </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    {/* <i class="material-icons text-danger">warning</i>
                    <a href="#pablo">Get More Space...</a> */}
                  </div>
                </div>
              </div>
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <FileCopyOutlined />
                  </div>
                  <p class="card-category">Current Blood Pressure</p>
                  <h3 class="card-title">
                    120/60
                  </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    {/* <i class="material-icons text-danger">warning</i>
                    <a href="#pablo">Get More Space...</a> */}
                  </div>
                </div>
              </div>
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <FileCopyOutlined />
                  </div>
                  <p class="card-category">Current Weight</p>
                  <h3 class="card-title">
                    210
                    <small>lbs</small>
                  </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    {/* <i class="material-icons text-danger">warning</i>
                    <a href="#pablo">Get More Space...</a> */}
                  </div>
                </div>
              </div>
              <div class="card">
        <div class="card-header card-chart card-header-warning">
          <div class="ct-chart" id="dailySalesChart"></div>
        </div>
        <div class="card-body">
          <h4 class="card-title">Daily Sales</h4>
          <p class="card-category"><span class="text-success"><i class="fa fa-long-arrow-up"></i> 55%  </span> increase in today sales.</p>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="material-icons">access_time</i> updated 4 minutes ago
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
