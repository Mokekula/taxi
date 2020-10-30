import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HeaderWithAuth } from "./components/Header/Header";
import { Map } from "./components/Map/Map";
import { ProfileWithCard } from "./components/Profile/Profile";
import { LoginWithAuth } from "./components/Login/Login";
import { RegistrationWithAuth } from "./components/Registration/Registration";
import { PrivateRoute } from "./PrivateRoute";
import { connect } from "react-redux";

export const App = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path="/map" component={HeaderWithAuth} /> */
        <PrivateRoute path="/profile" component={HeaderWithAuth} /> */
      </Switch>
      <Switch>
        <PrivateRoute path="/map" component={Map} />
        <PrivateRoute path="/profile" component={ProfileWithCard} />
        <Route path="/login" component={LoginWithAuth} />
        <Route path="/registration" component={RegistrationWithAuth} />
        {/* <Route component={<h1>404 Not Found Kek</h1>} /> */}
        <Redirect to="/login" />
      </Switch>
    </>
  );
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
