import React from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

const App = () => {
  const [page, setPage] = React.useState("login");

  const pages = {
    map: <Map setPage={setPage} />,
    profile: <Profile setPage={setPage} />,
    login: <Login setPage={setPage} />,
    registration: <Registration setPage={setPage} />,
  };

  if (page === "registration" || page === "login") {
    return <>{pages[page]}</>;
  } else {
    return (
      <>
        <Header setPage={setPage} />
        {pages[page]}
      </>
    );
  }
};

export default App;
