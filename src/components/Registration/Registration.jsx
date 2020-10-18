import PropTypes from "prop-types";
import React from "react";
import "./Registration.css";

export const Registration = (props) => {
  return (
    <div className="Container">
      <div className="Registration">
        <h2 className="Registration__title">Регистрация</h2>

        <div className="Registration__login">
          <span className="Registration__login-text">Уже зарегистрирован?</span>
          <button
            className="Registration__login-btn"
            onClick={() => props.setPage("login")}
          >
            Войти
          </button>
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

        <button
          className="Registration__register-btn"
          onClick={() => props.setPage()}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

Registration.propTypes = {
  setPage: PropTypes.func.isRequired,
};

// export default Registration;
