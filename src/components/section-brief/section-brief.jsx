import React from 'react';

import FuelIcon from '../../img/icon-fuel.svg';
import TransmissionIcon from '../../img/icon-transmission.svg';
import HorsepowerIcon from '../../img/icon-horsepower.svg';
import EngineIcon from '../../img/icon-engine.svg';

const SectionBrief = () => {
  return (
    <section className="product-brief">
      <h2 className="product-brief__heading">Марпех 11</h2>
      <ul className="product-brief__list">
        <li className="product-brief__list-item">
          <img className="product-brief__list-item-image" width="24" height="22" src={FuelIcon} alt="" />
          <div className="product-brief__list-item-label">Бензин</div>
        </li>
        <li className="product-brief__list-item">
          <img className="product-brief__list-item-image" width="26" height="24" src={TransmissionIcon} alt="" />
          <div className="product-brief__list-item-label">Механика</div>
        </li>
        <li className="product-brief__list-item">
          <img className="product-brief__list-item-image" width="32" height="21" src={HorsepowerIcon} alt="" />
          <div className="product-brief__list-item-label">100 л.с.</div>
        </li>
        <li className="product-brief__list-item">
          <img className="product-brief__list-item-image" width="30" height="23" src={EngineIcon} alt="" />
          <div className="product-brief__list-item-label">1.4 л</div>
        </li>
      </ul>
      <div className="product-brief__price">2 300 000 ₽</div>
      <div className="product-brief__price-old">2 400 000 ₽</div>
      <button className="product-brief__application-button" type="button">
        Оставить заявку
      </button>
      <button className="product-brief__credit-button" type="button">
        В кредит от 11 000 ₽
      </button>
    </section>
  );
};

export default SectionBrief;