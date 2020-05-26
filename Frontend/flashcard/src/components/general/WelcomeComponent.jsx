import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            email: this.props.location.state.email
        }
    }
    render() {
        return(
            <div className="container">
                <br></br><br></br>
                <div className="jumbotron" style={{textAlign:"center", backgroundColor:"Black"}}>
                    <h1 style={{color:"Green"}}>Welcome {this.state.email} to the Employee Registry!!!</h1>
                    <br></br>
                </div>
                <button className="btn btn-warning" onClick={() =>this.props.history.push("/")}>Logout</button>
            </div>
        )
    }
}

export default withRouter(WelcomeComponent);
