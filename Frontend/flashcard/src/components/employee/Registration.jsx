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
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  handleChangeEmail(event){
    this.setState({
      email: event.target.value
    })
    console.log(this.state.email)
  }

  handleChangePassword(event){
    this.setState({
      password: event.target.value
      
    })
    console.log(this.state.password)
  }

  // handleChange(event) {
  //   this.setState({[event.target.name]: event.target.value})
  //   this.validateForm()
  // }

  handleSubmit() {
    let user = {
      id: -1,
      username: this.state.email,
      password: this.state.password,
    }
    FlashcardDataService.addUserLogin(user).then(this.props.history.push(`/`))
  }

  validateForm() {
    if(this.state.email.length === 0) this.setState({isValid: true})
    else if(this.state.password.length === 0) this.setState({isValid: true})
    else this.setState({isValid: false})
  
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
                            <input className="form-control" type="text" placeholder="email" value={this.state.email} onChange={this.handleChangeEmail}></input>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input className="form-control" type="password" placeholder="password" value={this.state.password} onChange={this.handleChangePassword}></input>
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
