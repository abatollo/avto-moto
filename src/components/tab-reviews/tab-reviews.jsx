import React from 'react';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action';

import StarsIcon from '../../img/icon-stars.svg';

const TabReviews = ({ changeIsPopupOpened }) => {
  const reviewsAddButtonClickHandler = (evt) => {
    evt.preventDefault();
    changeIsPopupOpened(true);
  };

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
      <li className="reviews-item">
        <article>
          <div className="reviews-item__name">Борис Иванов</div>
          <dl>
            <dt className="reviews-item__subheading reviews-item__subheading--plus">
              Достоинства
            </dt>
            <dd className="reviews-item__description">
              мощность, внешний вид
            </dd>
          </dl>
          <dl>
            <dt className="reviews-item__subheading reviews-item__subheading--minus">
              Недостатки
            </dt>
            <dd className="reviews-item__description">
              Слабые тормозные колодки (пришлось заменить)
            </dd>
          </dl>
          <h3 className="reviews-item__heading">Комментарий</h3>
          <div className="reviews-item__comment">
            Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.
          </div>
          <img src={StarsIcon} alt="" />
          <div className="reviews-item__recomendation">Советует</div> 
          <div className="reviews-item__time">1 минуту назад</div>
          <button className="reviews-item__reply-button" type="button">Ответить</button>
        </article>
      </li>
      <li>
        <article>
          <div className="reviews-item__name">Марсель Исмагилов</div>
          <dl>
            <dt className="reviews-item__subheading reviews-item__subheading--plus">
              Достоинства
            </dt>
            <dd className="reviews-item__description">
              Cтиль, комфорт, управляемость
            </dd>
          </dl>
          <dl>
            <dt className="reviews-item__subheading reviews-item__subheading--minus">
              Недостатки
            </dt>
            <dd className="reviews-item__description">
              Дорогой ремонт и обслуживание
            </dd>
          </dl>
          <h3 className="reviews-item__heading">Комментарий</h3>
          <div className="reviews-item__comment">
            Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.
          </div>
          <img src={StarsIcon} alt="" />
          <div className="reviews-item__recomendation">Советует</div> 
          <div className="reviews-item__time">1 минуту назад</div>
          <button className="reviews-item__reply-button" type="button">Ответить</button>
        </article>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeIsPopupOpened(isPopupOpened) {
    dispatch(ActionCreator.changeIsPopupOpened(isPopupOpened));
  }
});

export default connect(mapDispatchToProps)(TabReviews);
