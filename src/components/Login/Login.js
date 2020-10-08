import React from "react";
import "../Login/Login.css";

function Login(props) {
  return (
    <div className="Container">
      <div className="Login">
        <h2 className="Login__title">Войти</h2>

        <div className="Login__registr">
          <span className="Login__registr-text">Новый пользователь?</span>
          <button
            className="Login__registr-btn"
            onClick={() => props.setPage("registration")}
          >
            Зарегистрируйтесь
          </button>
        </div>

        <form className="Login__form">
          <div className="Login__username-wrap">
            <label htmlFor="Login-name" className="Login__label">
              Имя пользователя*
            </label>
            <input type="text" className="Login__username" id="Login-name" />
          </div>

          <div className="Login__pass-wrap">
            <label htmlFor="Login-pass" className="Login__label">
              Пароль*
            </label>
            <input type="text" className="Login__pass" id="Login-pass" />
          </div>
        </form>

        <button className="Login__entry-btn" onClick={() => props.setPage()}>
          Войти
        </button>
      </div>
    </div>
  );
}

export default Login;
