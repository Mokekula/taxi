import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Map } from "./components/Map/Map";
import { Profile } from "./components/Profile/Profile";
import { Login } from "./components/Login/Login";
import { Registration } from "./components/Registration/Registration";
import { Context } from "./context";

const App = () => {
  const [page, setPage] = React.useState("login");
  const [isLoggedIn, logged] = React.useState(false);

  const pages = {
    map: <Map setPage={setPage} />,
    profile: <Profile setPage={setPage} />,
    login: <Login setPage={setPage} />,
    registration: <Registration setPage={setPage} />,
  };

  const login = (name, password) => {
    logged(true);
    setPage("map");
  };

  const logout = () => {
    logged(false);
    setPage("login");
  };

  const isPublicRoute = page === "registration" || page === "login";

  return (
    <Context.Provider value={{ login, logout }}>
      {/* {!isPublicRoute && <Header setPage={setPage} />}
      {pages[page]} */}
      <Switch>
        <Route path="/map" component={Header} /> */
        <Route path="/profile" component={Header} /> */
      </Switch>
      <Switch>
        <Route path="/map" component={Map} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Redirect to="/login" />
      </Switch>
    </Context.Provider>
  );
};

export default App;

{
  /* <ul>
        <li>
          <Link to="/map">Карта</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/header">Header</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/map" component={Map} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/map" component={Login} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/header" component={Header} /> */
}
