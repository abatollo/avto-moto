import React from 'react';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action';

import StarsIcon from '../../img/icon-stars.svg';

const TabReviews = ({ changeIsPopupOpened, reviews }) => {
  const reviewsAddButtonClickHandler = (evt) => {
    evt.preventDefault();
    changeIsPopupOpened(true);
  };

  // const ReviewsList = [
  //   {
  //     name: `Борис Иванов`,
  //     advantages: `мощность, внешний вид`,
  //     disadvantages: `Слабые тормозные колодки (пришлось заменить)`,
  //     rating: 3,
  //     comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`
  //   },
  //   {
  //     name: `Марсель Исмагилов`,
  //     advantages: `Cтиль, комфорт, управляемость`,
  //     disadvantages: `Дорогой ремонт и обслуживание`,
  //     rating: 3,
  //     comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`
  //   }
  // ];

  return (
    <ul className="reviews">
      <a className="reviews__add-button" 
        href="/new-feedback" 
        onClick={(evt) => {
            reviewsAddButtonClickHandler(evt);
          }
        }
      >
        Оставить отзыв
      </a>
      {reviews.map((reviewItem, reviewItemIndex) => {
        return(
          <li className="reviews-item" key={reviewItemIndex}>
            <div className="reviews-item__name">{reviewItem.name}</div>
            <h3 className="reviews-item__subheading reviews-item__subheading--plus">
              Достоинства
            </h3>
            <p className="reviews-item__description">
              {reviewItem.advantages}
            </p>
            <h3 className="reviews-item__subheading reviews-item__subheading--minus">
              Недостатки
            </h3>
            <p className="reviews-item__description">
              {reviewItem.disadvantages}
            </p>
            <h3 className="reviews-item__heading">Комментарий</h3>
            <p className="reviews-item__comment">
              {reviewItem.comment}
            </p>
            <img src={StarsIcon} alt="" />{reviewItem.rating}
            <div className="reviews-item__recomendation">Советует</div> 
            <time className="reviews-item__time">1 минуту назад</time>
            <a className="reviews-item__reply-button" 
              href="/new-feedback"
              onClick={(evt) => {
                  reviewsAddButtonClickHandler(evt);
                }
              }
            >
              Ответить
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeIsPopupOpened(isPopupOpened) {
    dispatch(ActionCreator.changeIsPopupOpened(isPopupOpened));
  }
});

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabReviews);
