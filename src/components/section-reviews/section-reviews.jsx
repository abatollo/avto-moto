import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../store/action';

import StarInactiveIcon from '../../img/icon-star-inactive.svg';
import StarActiveIcon from '../../img/icon-star-active.svg';

const SectionReviews = ({ onIsPopupOpenedChange, reviews }) => {
  const handleReviewsAddButtonClick = (evt) => {
    evt.preventDefault();
    onIsPopupOpenedChange(true);
  };

  return (
    <section className="section-reviews">
      <h2 className="visually-hidden">Отзывы</h2>
      <a className="section-reviews__add-button" 
        href="/new-feedback" 
        onClick={(evt) => {
            handleReviewsAddButtonClick(evt);
          }
        }
      >
        Оставить отзыв
      </a>
      <ul className="section-reviews__list">
        {reviews.map((reviewItem, reviewItemIndex) => {
          return(
            <li className="section-reviews__item" key={reviewItemIndex}>
              <div className="section-reviews__username">{reviewItem.name}</div>
              <h3 className="section-reviews__subheading section-reviews__subheading--plus">
                Достоинства
              </h3>
              <p className="section-reviews__description">
                {reviewItem.advantages}
              </p>
              <h3 className="section-reviews__subheading section-reviews__subheading--minus">
                Недостатки
              </h3>
              <p className="section-reviews__description">
                {reviewItem.disadvantages}
              </p>
              <h3 className="section-reviews__heading">Комментарий</h3>
              <p className="section-reviews__comment">
                {reviewItem.comment}
              </p>
              <ul className="section-reviews__rating-stars-list">
                {[...Array(5)].map((_starItem, starItemIndex) => {
                  return (
                    <li key={starItemIndex}>
                      {(starItemIndex < reviewItem.rating) ?
                        <img width="17" height="16" src={StarActiveIcon} alt="" /> : 
                        <img width="17" height="16" src={StarInactiveIcon} alt="" />
                      }
                    </li>
                  );
                })}
              </ul>
              <div className="section-reviews__recomendation">Советует</div> 
              <div className="section-reviews__time">1 минуту назад</div>
              <a className="section-reviews__reply" 
                href="/new-feedback"
                onClick={(evt) => {
                    handleReviewsAddButtonClick(evt);
                  }
                }
              >
                Ответить
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

SectionReviews.propTypes = {
  onIsPopupOpenedChange: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      advantages: PropTypes.string,
      disadvantages: PropTypes.string,
      rating: PropTypes.number,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onIsPopupOpenedChange(isPopupOpened) {
    dispatch(ActionCreator.onIsPopupOpenedChange(isPopupOpened));
  }
});

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionReviews);
