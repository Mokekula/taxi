import PropTypes from "prop-types";
import React, { useContext } from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import { Context } from "../../context";

const Header = (props) => {
  const { logout } = useContext(Context);

  return (
    <header className="Header">
      <img src={logo} alt="logo" className="Logo" />

      <nav className="Menu">
        <ul className="Menu__inner">
          <li className="Map" onClick={() => props.setPage("map")}>
            <button href="#" className="Map__btn">
              Карта
            </button>
          </li>
          <li className="Profile" onClick={() => props.setPage("profile")}>
            <button href="#" className="Profile__btn">
              Профиль
            </button>
          </li>
          <li className="Exit" onClick={() => logout()}>
            <button href="#" className="Exit__btn">
              Выйти
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Header;
