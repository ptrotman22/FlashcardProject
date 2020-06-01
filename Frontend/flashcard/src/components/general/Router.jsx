import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Registration from '../employee/Registration'
import WelcomeComponent from './WelcomeComponent'
import Flashcard from './Flashcard'
import Newflashcard from './Newflashcard'
import Manageflashcard from './Manageflashcard'
import Updateflashcard from './Updateflashcard'

class Router extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/flashcard" component={Flashcard}></Route>
            <Route path="/manageflashcard" component={Manageflashcard}></Route>
            <Route path="/newflashcard" component={Newflashcard}></Route>
            <Route path="/updateflashcard" component={Updateflashcard}></Route>
            <Route path="/register" component={Registration}></Route>
            <Route path="/logout" component={WelcomeComponent}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
