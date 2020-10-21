import React, { Component } from "react";
import "./Profile.css";
import { connect } from "react-redux";

export class Profile extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Profile">
          <h2 className="Profile__title">
            Профиль
            <span className="Profile__subtitle">Способ оплаты</span>
          </h2>
          <div className="Profile__card-wrap">
            <div className="Profile__card-leftside">
              <img
                src="../../img/logo.png"
                alt="mclogo"
                className="Profile__card-logo"
              />

              <form className="Profile__card-ls-form">
                <label htmlFor="card-number">Номер карты:</label>]
                <input
                  type="text"
                  className="Profile__card-number"
                  id="card-number"
                  placeholder="CARD NUMBER"
                />
                <label htmlFor="card-date">Срок действия:</label>]
                <input
                  type="text"
                  className="Profile__card-date"
                  id="card-date"
                  placeholder="00/00"
                />
              </form>
            </div>
            <div className="Profile__card-rightside">
              <form className="Profile__card-rs-form">
                <label htmlFor="card-name">Имя владельца:</label>]
                <input
                  type="text"
                  className="Profile__card-name"
                  id="card-name"
                  placeholder="USER NAME"
                />
                <label htmlFor="card-date">Срок действия:</label>]
                <input
                  type="password"
                  className="Profile__card-date"
                  id="card-date"
                  placeholder="***"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default Profile;
