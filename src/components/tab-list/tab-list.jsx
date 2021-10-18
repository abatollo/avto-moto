import React from 'react';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action';

const TabList = ({ currentTab, setCurrentTab }) => {
  return (
    <ul className="section-tabs__list">
    <li className="section-tabs__list-item">
      <input className="visually-hidden section-tabs__list-item-radio-input" type="radio" name="tab" value="char" id="product-tab-specifications" onChange={() => {setCurrentTab(`product-tab-specifications`)}} checked={currentTab === `product-tab-specifications`} />
      <label className="section-tabs__list-item-label" htmlFor="product-tab-specifications">
        Характеристики
      </label>
    </li>
    <li className="section-tabs__list-item">
      <input className="visually-hidden section-tabs__list-item-radio-input" type="radio" name="tab" value="char" id="product-tab-reviews" onChange={() => {setCurrentTab(`product-tab-reviews`)}} checked={currentTab === `product-tab-reviews`} />
      <label className="section-tabs__list-item-label" htmlFor="product-tab-reviews">
        Отзывы
      </label>
    </li>
    <li className="section-tabs__list-item">
      <input className="visually-hidden section-tabs__list-item-radio-input" type="radio" name="tab" value="char" id="product-tab-contact-information" onChange={() => {setCurrentTab(`product-tab-contact-information`)}} checked={currentTab === `product-tab-contact-information`} />
      <label className="section-tabs__list-item-label" htmlFor="product-tab-contact-information">
        Контакты
      </label>
    </li>
  </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    currentTab: state.currentTab
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentTab(currentTab) {
    dispatch(ActionCreator.setCurrentTab(currentTab));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabList);
