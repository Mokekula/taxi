import React from "react";
import "../Header/Header.css";
import logo from "../../img/logo.png";

function Header(props) {
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
          <li className="Exit" onClick={() => props.setPage("login")}>
            <a href="#" className="Exit__btn">
              Выйти
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
