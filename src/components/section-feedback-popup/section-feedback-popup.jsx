import React, { useRef, useState, useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../store/action';

import {keyCodes} from '../../const/key-codes';

import CloseIcon from '../../img/icon-close.svg';
import StarInactiveIcon from '../../img/icon-star-inactive.svg';
import StarActiveIcon from '../../img/icon-star-active.svg';

const SectionFeedbackPopup = ({ isPopupOpened, onIsPopupOpenedChange, onReviewAdd }) => {
  const refPopup = useRef(null);

  const [nameError, setNameError] = useState(false);
  const [commentError, setCommentError] = useState(false);

  const [name, setName] = useState(localStorage.getItem(`name`) || ``);
  const [advantages, setAdvantages] = useState(localStorage.getItem(`advantages`) || ``);
  const [disadvantages, setDisadvantages] = useState(localStorage.getItem(`disadvantages`) || ``);
  const [rating, setRating] = useState(localStorage.getItem(`rating`) || 0);
  const [comment, setComment] = useState(localStorage.getItem(`comment`) || ``);

  const handleFeedbackFormSubmitButtonClick = () => {
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
      onReviewAdd(name, advantages, disadvantages, rating, comment);
      onIsPopupOpenedChange(false);
    }
  };

  const handleFeedbackFormCloseButtonClick = () => {
    onIsPopupOpenedChange(false);
  };

  const handlePopupClick = (evt) => {
    if (evt.target === refPopup.current) {
      onIsPopupOpenedChange(false);
    }
  };

  useEffect(() => {
    let scrollbarWidth = window.innerWidth - document.body.clientWidth;
    if (isPopupOpened) { 
      document.body.style.overflow = `hidden`;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = ``;
      document.body.style.paddingRight = ``;
    };
  }, [isPopupOpened]);

  const handleNameChange = (evt) => {
    setName(evt.target.value);
    localStorage.setItem(`name`, evt.target.value);
  };

  const handleAdvantagesChange = (evt) => {
    setAdvantages(evt.target.value);
    localStorage.setItem(`advantages`, evt.target.value);
  };

  const handleDisadvantagesChange = (evt) => {
    setDisadvantages(evt.target.value);
    localStorage.setItem(`disadvantages`, evt.target.value);
  };

  const handleStarChange = (newRating) => {
    setRating(Number(newRating));
    localStorage.setItem(`rating`, newRating);
  };

  const handleCommentChange = (evt) => {
    setComment(evt.target.value);
    localStorage.setItem(`comment`, evt.target.value);
  };

  const handlePopupTabOrShiftAndTabKeydown = (evt) => {
    if (evt.keyCode === keyCodes.TAB) {
      const focusablePopupElements = refPopup.current.querySelectorAll(`a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select`);

      const firstElement = focusablePopupElements[0];
      const lastElement = focusablePopupElements[focusablePopupElements.length - 1];

      if (document.activeElement === firstElement && evt.shiftKey) {
        evt.preventDefault();
        lastElement.focus();
      } else if (document.activeElement === lastElement && !evt.shiftKey) {
        evt.preventDefault();
        firstElement.focus();
      }
    }
  };

  const handlePopupEscapeKeydown = () => {
    onIsPopupOpenedChange(false);
  };

  const keydownHandlers = new Map([
    [keyCodes.ESCAPE, handlePopupEscapeKeydown], 
    [keyCodes.TAB, handlePopupTabOrShiftAndTabKeydown]
  ]);

  const handlePopupKeydown = (evt) => {
    const handlePopupKeydownProper = keydownHandlers.get(evt.keyCode);

    if (handlePopupKeydownProper) {
      handlePopupKeydownProper(evt);
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, handlePopupKeydown);
    return () => { document.removeEventListener(`keydown`, handlePopupKeydown) };
  });

  useEffect(() => {
    if (refPopup.current) {
      const focusablePopupElement = refPopup.current.querySelector(`a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select`);
      focusablePopupElement.focus();
    }
  }, [isPopupOpened]);

  return (
    <section className="popup" ref={refPopup} onClick={(evt) => {handlePopupClick(evt);}}>
      <div className="popup__wrapper">
        <h2 className="popup__heading">Оставить отзыв</h2>
        <form className="feedback-form" id="feedback-form" method="POST" action="https://echo.htmlacademy.ru" >
          <div className="feedback-form__input-wrapper--name">
            {nameError && <div className="feedback-form__error">Пожалуйста, заполните поле</div>}
            <label className="visually-hidden" htmlFor="feedback-form-name">Ваше имя</label>
            <input className={`feedback-form__input feedback-form__input--name${nameError ? ` feedback-form__input--error` : ``}`} type="text" name="name" id="feedback-form-name" placeholder="Имя" value={name} onChange={(evt) => {handleNameChange(evt)}} required />
          </div>
          <label className="visually-hidden" htmlFor="feedback-form-advantages">Достоинства товара</label>
          <input className="feedback-form__input feedback-form__input--advantages" type="text" name="advantages" id="feedback-form-advantages" placeholder="Достоинства" onChange={(evt) => {handleAdvantagesChange(evt)}} value={advantages} />
          <label className="visually-hidden" htmlFor="feedback-form-disadvantages">Недостатки товара</label>
          <input className="feedback-form__input feedback-form__input--disadvantages" type="text" name="disadvantages" id="feedback-form-disadvantages" placeholder="Недостатки" onChange={(evt) => {handleDisadvantagesChange(evt)}} value={disadvantages} />
          <div className="feedback-form__stars">
            <span className="feedback-form__stars-label">Оцените товар:</span>
            <ul className="feedback-form__stars-list">
              {[...Array(5)].map((_starInput, starInputIndex) => {
                return (
                  <li key={starInputIndex}>
                    <input className="feedback-form__stars-list-input visually-hidden" type="radio" name="rating" id={`star-${starInputIndex + 1}`} onChange={() => {handleStarChange(starInputIndex + 1)}} checked={rating === starInputIndex + 1} />
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
            <textarea className={`feedback-form__input feedback-form__input--comment${commentError ? ` feedback-form__input--error` : ``}`} name="comment" id="feedback-form-comment" cols="30" rows="10" placeholder="Комментарий" onChange={(evt) => {handleCommentChange(evt)}} value={comment} required></textarea>
          </div>
        </form>
        <button className="feedback-form__submit-button" form="feedback-form" type="submit" onClick={handleFeedbackFormSubmitButtonClick}>Оставить отзыв</button>
        <button className="feedback-form__close-button" type="button" onClick={handleFeedbackFormCloseButtonClick}><img width="15" height="15" src={CloseIcon} alt="" /></button>
      </div>
    </section>
  );
};

SectionFeedbackPopup.propTypes = {
  isPopupOpened: PropTypes.bool.isRequired,
  onIsPopupOpenedChange: PropTypes.func.isRequired,
  onReviewAdd: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    isPopupOpened: state.isPopupOpened
  };
};

const mapDispatchToProps = (dispatch) => ({
  onIsPopupOpenedChange(isPopupOpened) {
    dispatch(ActionCreator.onIsPopupOpenedChange(isPopupOpened));
  },
  onReviewAdd(
    name,
    advantages,
    disadvantages,
    rating,
    comment
  ) {
    dispatch(ActionCreator.onReviewAdd({
      name,
      advantages,
      disadvantages,
      rating,
      comment
    }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionFeedbackPopup);
