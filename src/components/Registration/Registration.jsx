import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";

export class Registration extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Registration">
          <h2 className="Registration__title">Регистрация</h2>

          <div className="Registration__login">
            <span className="Registration__login-text">
              Уже зарегистрирован?
            </span>
            <Link to="/login" className="Registration__login-btn">
              Войти
            </Link>
          </div>

          <form className="Registration__form">
            <div className="Registration__mail-wrap">
              <label htmlFor="Reg-mail" className="Registration__label">
                Адрес электронной почты
              </label>
              <input
                type="email"
                className="Registration__mail"
                id="Reg-mail"
                name="email"
              />
            </div>

            <div className="Registration__name-wrap">
              <label htmlFor="Reg-name" className="Registration__label">
                Имя
              </label>
              <br />
              <input
                type="text"
                className="Registration__name"
                id="Reg-name"
                name="firstname"
              />
            </div>

            <div className="Registration__surname-wrap">
              <label htmlFor="Reg-surname" className="Registration__label">
                Фамилия
              </label>
              <br />
              <input
                type="text"
                className="Registration__surname"
                id="Reg-surname"
                name="surname"
              />
            </div>

            <div className="Registration__pass-wrap">
              <label htmlFor="Reg-pass" className="Registration__label">
                Пароль
              </label>
              <input
                type="password"
                className="Registration__pass"
                id="Reg-pass"
                name="password"
              />
            </div>
          </form>

          <Link to="/map" className="Registration__register-btn">
            Регистрация
          </Link>
        </div>
      </div>
    );
  }
}

// export default Registration;
