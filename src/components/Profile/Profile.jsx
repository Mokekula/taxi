import React, { useState } from "react";
import "./Profile.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { cardUpdate } from "../../actions/cardAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const [number, setNumber] = useState(props.number);
  const [name, setName] = useState(props.name);
  const [expiry, setExpiry] = useState(props.expiry);
  const [cvc, setCvc] = useState(props.cvc);
  const [focus, setFocus] = useState("");
  const [updateCard, setUpdateCard] = useState(false);

  const handleFocus = (e) => {
    setFocus(e.target.name);
  };

  const funcCardAdd = (e) => {
    e.preventDefault();
    const { number, expiry, name, cvc } = e.target;

    props.cardUpdate({
      cardNumber: number.value,
      cardName: name.value,
      expiryDate: expiry.value,
      cvc: cvc.value,
      token: props.token,
    });

    setUpdateCard(true);
  };

  return (
    <>
      {updateCard ? (
        <div className="Profile-success">
          <Link
            to="/map"
            className="Profile-success__btn"
            onClick={() => setUpdateCard(false)}
          >
            Перейти на карту
          </Link>
        </div>
      ) : (
        <div id="PaymentForm">
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focus={focus}
          />
          <div className="Container">
            <div className="Profile">
              <h1 className="Profile__title">
                Профиль
                <span className="Profile__subtitle">Способ оплаты</span>
              </h1>
              <form
                className="Profile__card-form"
                id="card-form"
                onSubmit={funcCardAdd}
              >
                <label htmlFor="card-number" className="Profile__card-label">
                  Номер карты:
                </label>
                <input
                  type="tel"
                  className="Profile__card-number"
                  id="card-number"
                  placeholder="CARD NUMBER"
                  name="number"
                  onChange={(e) => setNumber(e.target.value)}
                  onFocus={handleFocus}
                  maxLength="16"
                />
                <label htmlFor="card-date" className="Profile__card-label">
                  Срок действия:
                </label>
                <input
                  type="text"
                  className="Profile__card-date"
                  id="card-date"
                  placeholder="00/00"
                  name="expiry"
                  onChange={(e) => setExpiry(e.target.value)}
                  onFocus={handleFocus}
                  maxLength="4"
                />
                <label htmlFor="card-name" className="Profile__card-label">
                  Имя владельца:
                </label>
                <input
                  type="text"
                  className="Profile__card-name"
                  id="card-name"
                  placeholder="USER NAME"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  onFocus={handleFocus}
                />
                <label htmlFor="card-code" className="Profile__card-label">
                  Срок действия:
                </label>
                <input
                  type="password"
                  className="Profile__card-code"
                  id="card-code"
                  placeholder="CVC"
                  name="cvc"
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={handleFocus}
                  maxLength="3"
                />

                <button className="Profile__save-card" type="submit">
                  Сохранить
                </button>
                <button className="Profile__prompt">?</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const ProfileWithCard = connect(
  (state) => ({
    number: state.card.number,
    name: state.card.name,
    expiry: state.card.expiry,
    cvc: state.card.cvc,
    token: state.auth.token,
    updateCard: state.card.updateCard,
  }),
  {
    cardUpdate,
  }
)(Profile);
