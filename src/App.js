import React, { Component, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HeaderWithAuth } from "./components/Header/Header";
import { Map } from "./components/Map/Map";
import { Profile } from "./components/Profile/Profile";
import { LoginWithAuth } from "./components/Login/Login";
import { Registration } from "./components/Registration/Registration";
import { PrivateRoute } from "./PrivateRoute";
import { connect } from "react-redux";

export class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <PrivateRoute path="/map" component={HeaderWithAuth} /> */
          <PrivateRoute path="/profile" component={HeaderWithAuth} /> */
        </Switch>
        <Switch>
          <PrivateRoute path="/map" component={Map} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={LoginWithAuth} />
          <Route path="/registration" component={Registration} />
          {/* <Route component={<h1>404 Not Found Kek</h1>} /> */}
          <Redirect to="/login" />
        </Switch>
      </>
    );
  }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
