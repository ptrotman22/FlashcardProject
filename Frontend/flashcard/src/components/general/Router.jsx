import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import AdminConsole from './AdminConsole'
import AddEmployee from '../employee/AddEmployee'
import Registration from '../employee/Registration'
import WelcomeComponent from './WelcomeComponent'

class Router extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/adminConsole" component={AdminConsole}></Route>
            <Route path="/addEmployee" component={AddEmployee}></Route>
            <Route path="/register" component={Registration}></Route>
            <Route path="/employee" component={WelcomeComponent}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
