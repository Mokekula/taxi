import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";
import { connect } from "react-redux";
import { authenticate } from "../../modules/actions";

class Login extends Component {
  funcAuthenticate = (event) => {
    event.preventDefault();
    const { username, password } = event.target;
    if (username.value && password.value) {
      this.props.authenticate(username.value, password.value);
    } else {
      alert("meow");
    }
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
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

              <form className="Login__form" onSubmit={this.funcAuthenticate}>
                <div className="Login__username-wrap">
                  <label htmlFor="Login-name" className="Login__label">
                    Имя пользователя*
                  </label>
                  <input
                    type="text"
                    className="Login__username"
                    id="Login-name"
                    name="username"
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
  }
}

export const LoginWithAuth = connect(
  (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
  }),
  { authenticate }
)(Login);
