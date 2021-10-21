import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../store/action';

import SectionSpecifications from '../section-specifications/section-specifications';
import SectionReviews from '../section-reviews/section-reviews';
import SectionContactInformation from '../section-contact-information/section-contact-information';

const SectionTabs = ({ currentTab, onCurrentTabSet }) => {
  return (
    <section className="section-tabs">
      <h2 className="visually-hidden">Подробности о товаре</h2>
      <ul className="section-tabs__list">
        <li>
          <input className="section-tabs__input visually-hidden" type="radio" name="tab" value="char" id="product-tab-specifications" onChange={() => {onCurrentTabSet(`product-tab-specifications`)}} checked={currentTab === `product-tab-specifications`} />
          <label className="section-tabs__label" htmlFor="product-tab-specifications">
            Характеристики
          </label>
        </li>
        <li>
          <input className="section-tabs__input visually-hidden" type="radio" name="tab" value="char" id="product-tab-reviews" onChange={() => {onCurrentTabSet(`product-tab-reviews`)}} checked={currentTab === `product-tab-reviews`} />
          <label className="section-tabs__label" htmlFor="product-tab-reviews">
            Отзывы
          </label>
        </li>
        <li>
          <input className="section-tabs__input visually-hidden" type="radio" name="tab" value="char" id="product-tab-contact-information" onChange={() => {onCurrentTabSet(`product-tab-contact-information`)}} checked={currentTab === `product-tab-contact-information`} />
          <label className="section-tabs__label" htmlFor="product-tab-contact-information">
            Контакты
          </label>
        </li>
      </ul>
      {currentTab === `product-tab-specifications` && <SectionSpecifications />}
      {currentTab === `product-tab-reviews` && <SectionReviews /> }
      {currentTab === `product-tab-contact-information` && <SectionContactInformation /> }
    </section>
  );
};

SectionTabs.propTypes = {
  currentTab: PropTypes.string.isRequired,
  onCurrentTabSet: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    currentTab: state.currentTab
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCurrentTabSet(currentTab) {
    dispatch(ActionCreator.onCurrentTabSet(currentTab));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionTabs);