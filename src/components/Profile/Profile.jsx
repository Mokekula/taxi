import React, { Component } from "react";
import "./Profile.css";
import { connect } from "react-redux";

export class Profile extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Profile">
          <h1 className="Profile__title">
            Профиль
            <span className="Profile__subtitle">Способ оплаты</span>
          </h1>
          <div className="Profile__card-wrap">
            <div className="Profile__card-frontside">
              {/* <img
                src="../../img/logo.png"
                alt="mclogo"
                className="Profile__card-logo"
              /> */}

              <form className="Profile__card-fs-form">
                <label htmlFor="card-number" className="Profile__card-label">
                  Номер карты:
                </label>
                <input
                  type="text"
                  className="Profile__card-number"
                  id="card-number"
                  placeholder="CARD NUMBER"
                />
                <label htmlFor="card-date" className="Profile__card-label">
                  Срок действия:
                </label>
                <input
                  type="text"
                  className="Profile__card-date"
                  id="card-date"
                  placeholder="00/00"
                />
              </form>
            </div>
            <div className="Profile__card-backside">
              <form className="Profile__card-bs-form">
                <label htmlFor="card-name" className="Profile__card-label">
                  Имя владельца:
                </label>
                <input
                  type="text"
                  className="Profile__card-name"
                  id="card-name"
                  placeholder="USER NAME"
                />
                <label htmlFor="card-code" className="Profile__card-label">
                  Срок действия:
                </label>
                <input
                  type="password"
                  className="Profile__card-code"
                  id="card-code"
                  placeholder="***"
                />
              </form>
            </div>
          </div>
          <button className="Profile__save-card">Сохранить</button>
          <button className="Profile__prompt">?</button>
        </div>
      </div>
    );
  }
}

// export default Profile;
