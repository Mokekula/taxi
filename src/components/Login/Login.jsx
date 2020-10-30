import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";
import { connect } from "react-redux";
import { authenticate } from "../../actions/authAction";

const Login = (props) => {
  const funcAuthenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    if (email.value && password.value) {
      props.authenticate(email.value, password.value);
    } else {
      alert("Write your email and password");
    }
  };

  return (
    <>
      {props.isLoggedIn ? (
        <Redirect to="/map" />
      ) : (
        <div className="Container">
          <div className="Login">
            <h2 className="Login__title">Войти</h2>

            <div className="Login__registr">
              <span className="Login__registr-text">Новый пользователь?</span>
              <Link to="/registration" className="Login__registr-btn">
                Зарегистрируйтесь
              </Link>
            </div>

            <form className="Login__form" onSubmit={funcAuthenticate}>
              <div className="Login__email-wrap">
                <label htmlFor="Login-name" className="Login__label">
                  Почта пользователя*
                </label>
                <input
                  type="text"
                  className="Login__email"
                  id="Login-name"
                  name="email"
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
                />
              </div>

              <button className="Login__entry-btn" type="submit">
                Войти
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export const LoginWithAuth = connect(
  (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
  }),
  { authenticate }
)(Login);
