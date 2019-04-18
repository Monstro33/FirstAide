import React, { Component } from "react";

class Success extends Component {
    render(){
        return (
            <div className="success-login" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", width: "100%"}}>
                <h2>You have successfully logged in.</h2>
            </div>

        )
    }
}

export default Success;