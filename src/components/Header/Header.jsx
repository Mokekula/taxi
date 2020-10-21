import React, { useContext, Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/logo.png";
import { connect } from "react-redux";
import { logOut } from "../../modules/actions";

class Header extends Component {
  funcUnauthenticate = () => {
    this.props.logOut();
  };

  render() {
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
              <button className="Exit__btn" onClick={this.funcUnauthenticate}>
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export const HeaderWithAuth = connect(null, { logOut })(Header);
// export default Header;
