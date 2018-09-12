import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import loginForm from './components/loginform'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'
import {createStore} from 'redux'
import OnSalePage from './components/OnSalePage'
import { BrowserRouter} from 'react-router-dom';
import { Component } from 'react';
import NewPost from './components/NewPost'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="col-container base-div">
          <div className="top-header-padding"> </div>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/sales" component={OnSalePage} exact/>
          <Route exact path="/login" component = {loginForm} />
          <Route exact path="/profile" component = {Profile} />
          <Route exact path = '/new-post' component = {NewPost}/>
        </div>
      </div>

    );
  }
}

export default withRouter(App)
