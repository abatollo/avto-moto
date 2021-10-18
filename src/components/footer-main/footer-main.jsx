import React from 'react';

import { FooterMenuItems } from '../../const/menu-items';

import MainMenu from '../main-menu/main-menu';

const FooterMain = () => 
  <footer className="footer-main">
    <div className="container center">
      <MainMenu menuItems={FooterMenuItems} />
    </div>
  </footer>
;

export { FooterMain };