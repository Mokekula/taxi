import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

export const PrivateRoute = connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
}))(({ component: RouteComponent, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <RouteComponent {...props} /> : <Redirect to="/login" />
    }
  />
));

// export default PrivateRoute;
