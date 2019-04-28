import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import Form from './components/NewQuestion/Form'
import NavBar from './components/NavBar'
import Poll from './components/Poll/Poll';
import Error from './components/Error/Error';
import LoginForm from './components/Login/LoginForm'
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import { history } from "./store";
import LeaderBoard from './components/LeaderBoard/LeaderBoard'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <ConnectedRouter history={history}>
      
          <NavBar />
          <div 
        >
          <Switch>
            <Route path='/' exact component={DashBoard} />
            <Route path='/leaderboard' exact component={LeaderBoard} />
            <Route path='/login' component={LoginForm} />
            <Route path="/poll/:id" component={Poll} />
            <Route path='/add' component={Form} />
            <Route path='/404' component={Error} />
          </Switch>
        </div>
      </ConnectedRouter>


    );
  }
}

export default connect()(App);
