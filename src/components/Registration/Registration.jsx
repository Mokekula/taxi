import React from "react";
import "./Registration.css";

function Registration(props) {
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
            <input type="text" className="Registration__mail" id="Reg-mail" />
          </div>

          <div className="Registration__name-wrap">
            <label htmlFor="Reg-name" className="Registration__label">
              Имя
            </label>
            <br />
            <input type="text" className="Registration__name" id="Reg-name" />
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
            />
          </div>

          <div className="Registration__pass-wrap">
            <label htmlFor="Reg-pass" className="Registration__label">
              Пароль
            </label>
            <input type="text" className="Registration__pass" id="Reg-pass" />
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
}

export default Registration;
