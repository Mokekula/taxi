import React from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { Context } from "./context";
import PropTypes from "prop-types";

const App = () => {
  const [page, setPage] = React.useState("login");
  const [isLoggedIn, logged] = React.useState(false);

  const pages = {
    map: <Map setPage={setPage} />,
    profile: <Profile setPage={setPage} />,
    login: <Login setPage={setPage} />,
    registration: <Registration setPage={setPage} />,
  };

  const login = (email, password) => {
    if ((email && password).length > 0) {
      logged(true);
      setPage("map");
    }
  };

  const logout = () => {
    logged(false);
    setPage("login");
  };

  const isPublicRoute = page === "registration" || page === "login";

  return (
    <Context.Provider value={{ login, logout }}>
      {!isPublicRoute && <Header setPage={setPage} />}
      {pages[page]}
    </Context.Provider>
  );
};

export default App;
