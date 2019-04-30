import React, { Component } from 'react'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register'
import { createBrowserHistory } from 'history';
import Createparcel from './Createparcel';
import Viewparcels from './Viewparcels'
class App extends Component {

  render() {

    return (
      <div>
        <Router history={createBrowserHistory}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/create_parcel" component={Createparcel} />
            <Route exact path="/view_parcels" component={Viewparcels} />
            <Login />
            <Register />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
