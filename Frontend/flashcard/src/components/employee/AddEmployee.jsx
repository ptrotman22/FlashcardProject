import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import EmployeeDataService from '../../service/EmployeeDataService'

class AddEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      age: 0,
      gender: "Male",
      administrator: false,
      isValid: true,
      user: this.props.location.state.user
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
    let employee = {
      id: -1,
      date: this.state.date,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      age: this.state.age,
      gender: this.state.gender,
      administrator: this.state.administrator === "on" ? "true" : "false"
    }
    EmployeeDataService.addEmployee(employee).then(this.props.history.push(`/adminConsole`, {email: this.state.user}))
  }

  validateForm() {
    if(this.state.date.length === 0) this.setState({isValid: true})
    else if(this.state.firstName.length === 0) this.setState({isValid: true})
    else if(this.state.firstName.length === 0) this.setState({isValid: true})
    else if(this.state.lastName.length === 0) this.setState({isValid: true})
    else if(this.state.email.length === 0) this.setState({isValid: true})
    else if(this.state.password.length === 0) this.setState({isValid: true})
    else if(this.state.phoneNumber.length < 10) this.setState({isValid: true})
    else if(this.state.age <= 0) this.setState({isValid: true})
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
                <h3 style={{textAlign: "center"}}>Add Employee</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Date:</label>
                            <input className="form-control" type="date" name="date" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>First Name:</label>
                            <input className="form-control" type="text" name="firstName" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input className="form-control" type="text" name="lastName" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input className="form-control" type="text" name="email" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input className="form-control" type="password" name="password" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Phone Number:</label>
                            <input className="form-control" type="text" name="phoneNumber" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Age:</label>
                            <input className="form-control" type="number" name="age" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Gender:</label>
                            <select className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange}>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label>Administrator:</label>
                            <input className="form-control" type="checkbox" name="administrator" checked={this.state.administrator} onChange={this.handleChange}></input>
                        </div><br/><br/>
                      <button className="btn btn-success" type="submit" disabled={this.state.isValid}>Submit</button>&ensp;
                      <button className="btn btn-warning" name="back" onClick={() =>this.props.history.push("/adminConsole", {email: this.state.user})}>Back</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(AddEmployee)
