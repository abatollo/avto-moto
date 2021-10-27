import React from 'react';

import { HeaderMain } from '../header-main/header-main';
import SectionMain from '../section-main/section-main';
import { FooterMain } from '../footer-main/footer-main';

const App = () => {
  return (
    <div className="wrapper-global">
      <HeaderMain />
      <SectionMain />
      <FooterMain />
    </div>
  );
}

export { App };
