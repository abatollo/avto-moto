import React from 'react';
import {connect} from 'react-redux';

import TabList from '../tab-list/tab-list';
import TabSpecifications from '../tab-specifications/tab-specifications';
import TabReviews from '../tab-reviews/tab-reviews';
import TabContactInformation from '../tab-contact-information/tab-contact-information';

const SectionTabs = ({ currentTab }) => {
  return (
    <section className="section-tabs">
      <TabList />
      {currentTab === `product-tab-specifications` && <TabSpecifications />}
      {currentTab === `product-tab-reviews` && <TabReviews /> }
      {currentTab === `product-tab-contact-information` && <TabContactInformation /> }
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    currentTab: state.currentTab
  };
};

export default connect(mapStateToProps)(SectionTabs);