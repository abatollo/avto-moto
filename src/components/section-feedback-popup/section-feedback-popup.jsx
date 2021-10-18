import React, { useRef, useState, useEffect } from 'react';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action';

import CloseIcon from '../../img/icon-close.svg';
// import FormStarsIcon from '../../img/icon-stars-form.svg';
import StarIcon from '../../img/icon-star.svg';
import StarIconChecked from '../../img/icon-star-checked.svg';

const SectionFeedbackPopup = ({ isPopupOpened, changeIsPopupOpened, addReview }) => {
  const refPopup = useRef(null);

  const [name, setName] = useState(``);
  const [advantages, setAdvantages] = useState(``);
  const [disadvantages, setDisadvantages] = useState(``);
  const [rating, setRating] = useState(2);
  const [comment, setComment] = useState(``);

  const feedbackFormSubmitButtonClickHandler = () => {
    changeIsPopupOpened(false);
    addReview(name, advantages, disadvantages, rating, comment);
  };

  const feedbackFormCloseButtonClickHandler = () => {
    changeIsPopupOpened(false);
  };

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

  const nameChangeHandler = (evt) => {
    setName(evt.target.value);
  };

  const advantagesChangeHandler = (evt) => {
    setAdvantages(evt.target.value);
  };

  const disadvantagesChangeHandler = (evt) => {
    setDisadvantages(evt.target.value);
  };

  const starChangeHandler = (newRating) => {
    setRating(newRating);
  };

  const commentChangeHandler = (evt) => {
    setComment(evt.target.value);
  };

  if (isPopupOpened) {
    return (
      <section className="popup" ref={refPopup} onClick={(evt) => {popupClickHandler(evt);}}>
        <div className="popup__wrapper">
          <h2 className="popup__heading">Оставить отзыв</h2>
          <form className="feedback-form" id="feedback-form" method="POST" action="https://echo.htmlacademy.ru">
            {false && <div>Пожалуйста, заполните поле</div>}
            <input className="feedback-form__input feedback-form__input--name" type="text" name="name" id="feedback-form-name" placeholder="Имя" value={name} onChange={(evt) => {nameChangeHandler(evt)}} required />
            <input className="feedback-form__input feedback-form__input--advantages" type="text" name="advantages" id="feedback-form-advantages" placeholder="Достоинства" onChange={(evt) => {advantagesChangeHandler(evt)}} value={advantages} />
            <input className="feedback-form__input feedback-form__input--disadvantages" type="text" name="disadvantages" id="feedback-form-disadvantages" placeholder="Недостатки" onChange={(evt) => {disadvantagesChangeHandler(evt)}} value={disadvantages} />
            <div className="feedback-form__stars">
              <span className="feedback-form__stars-label">Оцените товар:</span>
              {/* <img src={FormStarsIcon} alt="" /> */}
              <ul>
                {[...Array(5)].map((_starInput, starInputIndex) => {
                  return (
                    <li key={starInputIndex}>
                      <input className="feedback-form__star" type="radio" name="rating" id={`star-${starInputIndex + 1}`} onChange={() => {starChangeHandler(starInputIndex + 1)}} checked={rating === starInputIndex + 1} />
                      <label htmlFor={`star-${starInputIndex + 1}`}>
                        <img className="feedback-form__star-disabled" width="27" height="25" src={StarIcon} alt="" />
                        <img className="feedback-form__star-enabled" width="27" height="25" src={StarIconChecked} alt="" />
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <textarea className="feedback-form__input feedback-form__input--comment" name="comment" id="feedback-form-comment" cols="30" rows="10" placeholder="Комментарий" onChange={(evt) => {commentChangeHandler(evt)}} required>{comment}</textarea>
          </form>
          <button className="feedback-form__submit-button" form="feedback-form" type="submit" onClick={feedbackFormSubmitButtonClickHandler}>Оставить отзыв</button>
          <button className="feedback-form__close-button" type="button" onClick={feedbackFormCloseButtonClickHandler}><img src={CloseIcon} alt="" /></button>
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
  },
  addReview(
    name,
    advantages,
    disadvantages,
    rating,
    comment
  ) {
    dispatch(ActionCreator.addReview({
      name,
      advantages,
      disadvantages,
      rating,
      comment
    }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionFeedbackPopup);
