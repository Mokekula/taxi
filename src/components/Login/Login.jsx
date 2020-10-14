import React, {useContext, PropTypes} from "react";
import "./Login.css";
import {Context} from '../../context'

function Login(props) {
  const {login} = useContext(Context);

  const userEmailInput = React.createRef();
  const userPassInput = React.createRef();

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
            <input type="text" className="Login__username" id="Login-name" ref={userEmailInput}/>
          </div>

          <div className="Login__pass-wrap">
            <label htmlFor="Login-pass" className="Login__label">
              Пароль*
            </label>
            <input type="text" className="Login__pass" id="Login-pass" ref={userPassInput}/>
          </div>
        </form>

        <button className="Login__entry-btn" onClick={() => login(userEmailInput.current.value, userPassInput.current.value)}>
          Войти
        </button>
      </div>
    </div>
  );
}

export default Login;
// props.setPage(login)