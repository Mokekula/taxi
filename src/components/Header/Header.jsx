import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/logo.png";
import { Context } from "../../context";

export const Header = (props) => {
  const { logout } = useContext(Context);

  return (
    <header className="Header">
      <img src={logo} alt="logo" className="Logo" />

      <nav className="Menu">
        <ul className="Menu__inner">
          <li className="Map">
            <Link to="/map" className="Map__btn">
              Карта
            </Link>
          </li>
          <li className="Profile">
            <Link to="/profile" className="Profile__btn">
              Профиль
            </Link>
          </li>
          <li className="Exit">
            <Link to="/login" className="Exit__btn">
              Выйти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};

// export default Header;
