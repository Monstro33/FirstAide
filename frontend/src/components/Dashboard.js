import React, { Component } from "react";
import "material-dashboard/assets/css/material-dashboard.min.css";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";

class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard">
                  {/* <div class="card" style={{width: "80vw", height: "150px", marginLeft: "auto", marginRight: "auto"}}>
          <div class="card-header card-header-icon card-header-rose">
            <div class="card-icon">
              <i class="material-icons">language</i>
            </div>
          </div>
          <div class="card-body">
              <h4 class="card-title">Here is the Icon</h4>
                  The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
      </div> */}

        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon" style={{height: "80px", width: "80px"}}>
                    <FileCopyOutlined />
                  </div>
                  <p class="card-category">Used Space</p>
                  <h3 class="card-title">49/50
                    <small>GB</small>
                  </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons text-danger">warning</i>
                    <a href="#pablo">Get More Space...</a>
                  </div>
                </div>
              </div>
            </div>
            </div></div></div>
            
        );
    }
}

export default Dashboard;