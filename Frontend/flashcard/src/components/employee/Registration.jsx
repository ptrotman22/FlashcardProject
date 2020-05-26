import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FlashcardDataService from '../../service/FlashcardDataService'

class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    this.validateForm()
  }

  handleSubmit() {
    let user = {
      id: -1,
      email: this.state.email,
      password: this.state.password,
    }
    FlashcardDataService.addUserLogin(user).then(this.props.history.push(`/`))
  }

  validateForm() {
    if(this.state.date.length === 0) this.setState({isValid: true})
    else if(this.state.email.length === 0) this.setState({isValid: true})
    else if(this.state.password.length === 0) this.setState({isValid: true})
    else this.setState({isValid: false})
    // return this.state.date.length === 0
    // && this.state.firstName.length === 0
    // && this.state.lastName.length === 0
    // && this.state.email.length === 0
    // && this.state.password.length === 0
    // && this.state.phoneNumber.length < 10
    // && this.state.age === 0
  }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Register</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input className="form-control" type="text" name="email" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input className="form-control" type="password" name="password" onChange={this.handleChange}></input>
                        </div>
                        <br/><br/>
                      <button className="btn btn-success" type="submit" disabled={this.state.isValid}>Submit</button>&ensp;
                      <button className="btn btn-warning" name="back" onClick={() =>this.props.history.push("/")}>Back</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Registration)