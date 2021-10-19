import React from 'react';

import FuelIcon from '../../img/icon-fuel.svg';
import TransmissionIcon from '../../img/icon-transmission.svg';
import HorsepowerIcon from '../../img/icon-horsepower.svg';
import EngineIcon from '../../img/icon-engine.svg';

const SectionBrief = () => {
  return (
    <section className="section-brief">
      <h2 className="section-brief__heading">Марпех 11</h2>
      <ul className="section-brief__list">
        <li className="section-brief__item">
          <img className="section-brief__image" width="24" height="22" src={FuelIcon} alt="" />
          <div className="section-brief__label">Бензин</div>
        </li>
        <li className="section-brief__item">
          <img className="section-brief__image" width="26" height="24" src={TransmissionIcon} alt="" />
          <div className="section-brief__label">Механика</div>
        </li>
        <li className="section-brief__item">
          <img className="section-brief__image" width="32" height="21" src={HorsepowerIcon} alt="" />
          <div className="section-brief__label">100 л.с.</div>
        </li>
        <li className="section-brief__item">
          <img className="section-brief__image" width="30" height="23" src={EngineIcon} alt="" />
          <div className="section-brief__label">1.4 л</div>
        </li>
      </ul>
      <div className="section-brief__price">2 300 000 ₽</div>
      <div className="section-brief__price-old">2&#160;&#160;400 000 ₽</div>
      <button className="section-brief__application-button" type="button">
        Оставить заявку
      </button>
      <button className="section-brief__credit-button" type="button">
        В кредит от 11 000 ₽
      </button>
    </section>
  );
};

export default SectionBrief;