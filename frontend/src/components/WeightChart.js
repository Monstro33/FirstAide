import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";

class WeightChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userWeights: [],
      currentUserId: this.props.userId,
      currentUserWeights: [],
      currentWeight: ""
    };
  }

  componentDidMount() {
    fetch("https://localhost:44321/api/userweight")
      .then(res => res.json())
      .then(json => this.setState({ userWeights: json }))
      .then(() => this.setCurrentUserWeight());
  }

  setCurrentUserWeight() {
    const userId = this.props.userId;
    let CurrentWeight = 0;
    const CurrentUserWeights = this.state.userWeights.map(function(item) {
      if (item.userId === userId) {
        CurrentWeight = item.entryFive;
        return [
          item.entryOne,
          item.entryTwo,
          item.entryThree,
          item.entryFour,
          item.entryFive
        ];
      }
    });

    this.setState({ currentUserWeights: CurrentUserWeights, currentWeight: CurrentWeight });
  }

  render() {
    const Data = {
      labels: ["1", "2", "3", "4", "5"],
      series: this.state.currentUserWeights
    };

    return (
      <>
        <div class="card card-stats">
          <div class="card-header card-header-warning card-header-icon">
            <div class="card-icon">
              <FileCopyOutlined />
            </div>
            <p class="card-category">Current Weight</p>
            <h3 class="card-title">
              {this.state.currentWeight}
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
            <div className="ct-chart" id="dailySalesChart">
              <ChartistGraph data={Data} type={"Line"} />
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Weight Progress</h4>
            <p class="card-category">Over the last five entries.</p>
          </div>
        </div>
      </>
    );
  }
}

export default WeightChart;
