import React, { Component } from "react";
import jwtDecode from "jwt-decode";

class Dashboard extends Component {
    render(){
        const { auth } = this.props;

        const token = auth.getIdToken();
        const decoded = jwtDecode(token);

        console.log(decoded);

        return(
            <div><h1>Dashboard Page</h1></div>
        );
    }
}

export default Dashboard;