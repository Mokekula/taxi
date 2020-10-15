import PropTypes from "prop-types";
import React, {useContext} from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import {Context} from '../../context'

function Header(props) {
  const {logout} = useContext(Context);

  return (
    <header className="Header">
      <img src={logo} alt="logo" className="Logo" />

      <nav className="Menu">
        <ul className="Menu__inner">
          <li className="Map" onClick={() => props.setPage("map")}>
            <a href="#" className="Map__btn">
              Карта
            </a>
          </li>
          <li className="Profile" onClick={() => props.setPage("profile")}>
            <a href="#" className="Profile__btn">
              Профиль
            </a>
          </li>
          <li className="Exit" onClick={() => logout()}>
            <a href="#" className="Exit__btn">
              Выйти
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
}

export default Header;
