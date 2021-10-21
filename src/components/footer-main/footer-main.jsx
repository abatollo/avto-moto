import React from 'react';

import { footerMenuItems } from '../../const/menu-items';

import MainMenu from '../main-menu/main-menu';

const FooterMain = () => 
  <footer className="footer-main">
    <div className="container center">
      <MainMenu menuItems={footerMenuItems} />
    </div>
  </footer>
;

export { FooterMain };