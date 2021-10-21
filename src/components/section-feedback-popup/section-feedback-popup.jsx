import React, { useRef, useState, useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../store/action';

import CloseIcon from '../../img/icon-close.svg';
import StarInactiveIcon from '../../img/icon-star-inactive.svg';
import StarActiveIcon from '../../img/icon-star-active.svg';

const SectionFeedbackPopup = ({ isPopupOpened, changeIsPopupOpened, addReview }) => {
  const refPopup = useRef(null);
  const refNameInput = useRef(null);

  const [nameError, setNameError] = useState(false);
  const [commentError, setCommentError] = useState(false);

  const [name, setName] = useState(localStorage.getItem(`name`) || ``);
  const [advantages, setAdvantages] = useState(localStorage.getItem(`advantages`) || ``);
  const [disadvantages, setDisadvantages] = useState(localStorage.getItem(`disadvantages`) || ``);
  const [rating, setRating] = useState(localStorage.getItem(`rating`) || 2);
  const [comment, setComment] = useState(localStorage.getItem(`comment`) || ``);

  const feedbackFormSubmitButtonClickHandler = () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    
    if (!comment) {
      setCommentError(true);
    } else {
      setCommentError(false);
    }
    
    if (name && comment) {
      changeIsPopupOpened(false);
      addReview(name, advantages, disadvantages, rating, comment);
    }
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
    window.addEventListener(`keydown`, popupEscapeKeydownHandler);
    return () => window.removeEventListener(`keydown`, popupEscapeKeydownHandler);
  }, [isPopupOpened, changeIsPopupOpened]);

  useEffect(() => {
    if (isPopupOpened) { 
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = ``;
    }
  }, [isPopupOpened]);

  const nameChangeHandler = (evt) => {
    setName(evt.target.value);
    localStorage.setItem(`name`, evt.target.value);
  };

  const advantagesChangeHandler = (evt) => {
    setAdvantages(evt.target.value);
    localStorage.setItem(`advantages`, evt.target.value);
  };

  const disadvantagesChangeHandler = (evt) => {
    setDisadvantages(evt.target.value);
    localStorage.setItem(`disadvantages`, evt.target.value);
  };

  const starChangeHandler = (newRating) => {
    setRating(Number(newRating));
    localStorage.setItem(`rating`, newRating);
  };

  const commentChangeHandler = (evt) => {
    setComment(evt.target.value);
    localStorage.setItem(`comment`, evt.target.value);
  };

  useEffect(() => {
    if (refNameInput.current) {
      refNameInput.current.focus();
    }
  }, [isPopupOpened]);

  if (isPopupOpened) {
    return (
      <section className="popup" ref={refPopup} onClick={(evt) => {popupClickHandler(evt);}}>
        <div className="popup__wrapper">
          <h2 className="popup__heading">Оставить отзыв</h2>
          <form className="feedback-form" id="feedback-form" method="POST" action="https://echo.htmlacademy.ru">
            <div className="feedback-form__input-wrapper--name">
              {nameError && <div className="feedback-form__error">Пожалуйста, заполните поле</div>}
              <label className="visually-hidden" htmlFor="feedback-form-name">Ваше имя</label>
              <input className={`feedback-form__input feedback-form__input--name${nameError ? ` feedback-form__input--error` : ``}`} ref={refNameInput} type="text" name="name" id="feedback-form-name" placeholder="Имя" value={name} onChange={(evt) => {nameChangeHandler(evt)}} required />
            </div>
            <label className="visually-hidden" htmlFor="feedback-form-advantages">Достоинства товара</label>
            <input className="feedback-form__input feedback-form__input--advantages" type="text" name="advantages" id="feedback-form-advantages" placeholder="Достоинства" onChange={(evt) => {advantagesChangeHandler(evt)}} value={advantages} />
            <label className="visually-hidden" htmlFor="feedback-form-disadvantages">Недостатки товара</label>
            <input className="feedback-form__input feedback-form__input--disadvantages" type="text" name="disadvantages" id="feedback-form-disadvantages" placeholder="Недостатки" onChange={(evt) => {disadvantagesChangeHandler(evt)}} value={disadvantages} />
            <div className="feedback-form__stars">
              <span className="feedback-form__stars-label">Оцените товар:</span>
              <ul className="feedback-form__stars-list">
                {[...Array(5)].map((_starInput, starInputIndex) => {
                  return (
                    <li key={starInputIndex}>
                      <input className="visually-hidden" type="radio" name="rating" id={`star-${starInputIndex + 1}`} onChange={() => {starChangeHandler(starInputIndex + 1)}} checked={rating === starInputIndex + 1} />
                      <label className="feedback-form__stars-list-label" htmlFor={`star-${starInputIndex + 1}`}>
                        {(starInputIndex < rating) ? 
                          <img width="27" height="25" src={StarActiveIcon} alt="" /> :
                          <img width="27" height="25" src={StarInactiveIcon} alt="" />
                        }
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="feedback-form__input-wrapper--comment">
              {commentError && <div className="feedback-form__error">Пожалуйста, заполните поле</div>}
              <label className="visually-hidden" htmlFor="feedback-form-comment">Ваш комментарий</label>
              <textarea className={`feedback-form__input feedback-form__input--comment${commentError ? ` feedback-form__input--error` : ``}`} name="comment" id="feedback-form-comment" cols="30" rows="10" placeholder="Комментарий" onChange={(evt) => {commentChangeHandler(evt)}} value={comment} required></textarea>
            </div>
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

SectionFeedbackPopup.propTypes = {
  isPopupOpened: PropTypes.bool.isRequired,
  changeIsPopupOpened: PropTypes.func.isRequired,
  addReview: PropTypes.func.isRequired
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
