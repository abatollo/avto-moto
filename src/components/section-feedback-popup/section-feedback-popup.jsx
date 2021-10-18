import React, { useRef, useEffect } from 'react';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action';

import CloseIcon from '../../img/icon-close.svg';
import FormStarsIcon from '../../img/icon-stars-form.svg';

const SectionFeedbackPopup = ({ isPopupOpened, changeIsPopupOpened }) => {
  const refPopup = useRef(null);

  const popupClickHandler = (evt) => {
      if (evt.target === refPopup.current) {
        changeIsPopupOpened(false);
      }
  };

  useEffect(() => {
    const popupEscapeKeydownHandler = (evt) => {
      if (evt.key === `Escape`) {
        changeIsPopupOpened(false);
      }
    };
    window.addEventListener('keydown', popupEscapeKeydownHandler);
    return () => window.removeEventListener('keydown', popupEscapeKeydownHandler);
  }, [isPopupOpened, changeIsPopupOpened]);

  if (isPopupOpened) {
    return (
      <section className="popup" ref={refPopup} onClick={(evt) => {popupClickHandler(evt);}}>
        <div className="popup__wrapper">
          <h2 className="popup__heading">Оставить отзыв</h2>
          <form className="feedback-form" id="feedback-form" method="POST" action="https://echo.htmlacademy.ru">
            {false && <div>Пожалуйста, заполните поле</div>}
            <input className="feedback-form__input feedback-form__input--name" type="text" name="name" id="feedback-form-name" placeholder="Имя" required />
            <input className="feedback-form__input feedback-form__input--advantages" type="text" name="advantages" id="feedback-form-advantages" placeholder="Достоинства" />
            <input className="feedback-form__input feedback-form__input--disadvantages" type="text" name="disadvantages" id="feedback-form-disadvantages" placeholder="Недостатки"  />
            <div className="feedback-form__stars">
              <span className="feedback-form__stars-label">Оцените товар:</span>
              <img src={FormStarsIcon} alt="" />
            </div>
            <textarea className="feedback-form__input feedback-form__input--comment" name="comment" id="feedback-form-comment" cols="30" rows="10" placeholder="Комментарий" required ></textarea>
          </form>
          <button className="feedback-form__submit-button" form="feedback-form" type="submit">Оставить отзыв</button>
          <button className="feedback-form__close-button" type="button" onClick={() => {console.log(`close new feedback button click`); changeIsPopupOpened(false);}}><img src={CloseIcon} alt="" /></button>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    isPopupOpened: state.isPopupOpened
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeIsPopupOpened(isPopupOpened) {
    dispatch(ActionCreator.changeIsPopupOpened(isPopupOpened));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionFeedbackPopup);
