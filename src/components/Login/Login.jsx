import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Context } from "../../context";
import { useState } from "react";

export const Login = (props) => {
  const { login } = useContext(Context);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (name && password) {
      login();
    } else {
      alert("meow");
    }
  };

  return (
    <div className="Container">
      <div className="Login">
        <h2 className="Login__title">Войти</h2>

        <div className="Login__registr">
          <span className="Login__registr-text">Новый пользователь?</span>
          <Link to="/registration" className="Login__registr-btn">
            Зарегистрируйтесь
          </Link>
        </div>

        <form className="Login__form" onSubmit={() => handleSubmit()}>
          <div className="Login__username-wrap">
            <label htmlFor="Login-name" className="Login__label">
              Имя пользователя*
            </label>
            <input
              type="text"
              className="Login__username"
              id="Login-name"
              name="username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="Login__pass-wrap">
            <label htmlFor="Login-pass" className="Login__label">
              Пароль*
            </label>
            <input
              type="password"
              className="Login__pass"
              id="Login-pass"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* <button className="Login__entry-btn" type="submit"></button> */}
          <Link to="/map" className="Login__entry-btn">
            Войти
          </Link>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setPage: PropTypes.func,
};

// export default Login;
