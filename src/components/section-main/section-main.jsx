import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import SectionFeedbackPopup from '../section-feedback-popup/section-feedback-popup';
import SectionSlider from '../section-slider/section-slider';
import SectionBrief from '../section-brief/section-brief';
import SectionTabs from '../section-tabs/section-tabs';

const SectionMain = ({isPopupOpened}) => {
  return (
    <main className="main container center">
      <SectionSlider />
      <SectionBrief />
      <SectionTabs />
      {isPopupOpened && <SectionFeedbackPopup />}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    isPopupOpened: state.isPopupOpened
  };
};

export default connect(mapStateToProps)(SectionMain);
