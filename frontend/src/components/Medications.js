import React, { Component } from "react";
import MedicationsForm from "./MedicationsForm";

class Medications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medications: [],
      medicationName: "",
      medicationConcentration: "",
      medicationDosage: "",
      medicationPurpose: "",
      medicationNotes: ""
    };
  }
  setName = text => {
    this.setState({ medicationName: text });
  };

  setConcentration = text => {
    this.setState({ medicationConcentration: text });
  };

  setDosage = text => {
    this.setState({ medicationDosage: text });
  };

  setPurpose = text => {
    this.setState({ medicationPurpose: text });
  };

  setNotes = text => {
    this.setState({ medicationNotes: text });
  };

  addMedication = id => {
    const newMedication = {
      userId: id,
      medicationName: this.state.medicationName,
      concentration: this.state.medicationConcentration,
      dosage: this.state.medicationDosage,
      purpose: this.state.medicationPurpose,
      notes: this.state.medicationNotes
    };
    fetch("https://localhost:44321/api/medication", {
      method: "POST",
      body: JSON.stringify(newMedication),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          const allMedications = [...this.state.medications, newMedication];
          this.setState({ medications: allMedications });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  onAdd = () => {
    const userId = this.props.auth.currentUser.userId;
    this.addMedication(userId);
  };
  toggleCollapse() {
    const accord = document.querySelector("#collapseOne");

    if (accord.style.display === "none") {
      accord.style.display = "block";
    } else {
      accord.style.display = "none";
    }
  }

  componentDidMount() {
    fetch("https://localhost:44321/api/medication")
      .then(res => res.json())
      .then(json => this.setState({ medications: json }));
  }
  render() {
    const { isAuthenticated, login } = this.props.auth;
    const userId = this.props.auth.currentUser.userId;
    const real = this.state.medications.map(function(med) {
      if (med.userId == userId) {
        return (
          <tr key={med.id}>
            <td>{med.medicationName}</td>
            <td>{med.concentration}</td>
            <td>{med.dosage}</td>
            <td>{med.purpose}</td>
            <td>{med.notes}</td>
          </tr>
        );
      }
    });
    if (!isAuthenticated()) {
      login();
      return null;
    } else {
      return (
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title ">Current Medications</h4>
                    <p class="card-category">
                      Keep track of all your medications!
                    </p>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead class=" text-primary">
                          <tr>
                            <th>Name</th>
                            <th>Concentration</th>
                            <th>Dosage</th>
                            <th>Purpose</th>
                            <th>Notes</th>
                          </tr>
                          {real}
                        </thead>
                        <tbody />
                      </table>
                    </div>
                  </div>
                </div>
                <div class="card card-collapse">
                  <div class="card-header" role="tab" id="headingOne">
                    <h5
                      class="text-primary"
                      onClick={this.toggleCollapse}
                      style={{ cursor: "pointer", fontSize: "14px" }}
                    >
                      Add new medication +
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                    style={{ display: "none" }}
                  >
                    <div class="card-body">
                      <MedicationsForm
                        setName={this.setName}
                        setConcentration={this.setConcentration}
                        setDosage={this.setDosage}
                        setPurpose={this.setPurpose}
                        setNotes={this.setNotes}
                        addMedication={this.addMedication}
                        onAdd={this.onAdd}
                      />
                      <button id="MedicationsButton" onClick={this.onAdd}>
                        Add Medication
                      </button>
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
}

export default Medications;
