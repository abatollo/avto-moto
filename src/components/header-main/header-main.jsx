import React from 'react';

import { headerMenuItems } from '../../const/menu-items';

import MainMenu from '../main-menu/main-menu';

import logo from '../../img/logo.svg';

const HeaderMain = () => {
  return (
    <header className="header-main">
      <div className="container center">
        <nav className="header-main__navigation">
          <a className="header-main__logo-link" href="/">
            <img className="header-main__logo-image" src={logo} width="55" height="55" alt="Логотип AVTO MOTO" />
            <h1 className="header-main__logo-heading-wrapper">
              <span className="header-main__logo-heading">Avto</span>
              <span className="header-main__logo-subheading">Moto</span>
            </h1>
          </a>
          <MainMenu menuItems={headerMenuItems} isHeaderMenu={true} />
        </nav>
      </div>
    </header>
  );
};

export { HeaderMain };