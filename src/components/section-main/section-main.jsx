import React from 'react';

import SectionFeedbackPopup from '../section-feedback-popup/section-feedback-popup';
import SectionSlider from '../section-slider/section-slider';
import SectionBrief from '../section-brief/section-brief';
import SectionTabs from '../section-tabs/section-tabs';

const SectionMain = () => {
  return (
    <main className="main container center">
      <SectionSlider />
      <SectionBrief />
      <SectionTabs />
      <SectionFeedbackPopup />
    </main>
  );
};

export default SectionMain;
