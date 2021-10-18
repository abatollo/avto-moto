import React from 'react';

import { HeaderMenuItems } from '../../const/menu-items';

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
              <div className="header-main__logo-heading">Avto</div>
              <div className="header-main__logo-subheading">Moto</div>
            </h1>
          </a>
          <MainMenu menuItems={HeaderMenuItems} />
        </nav>
      </div>
    </header>
  );
};

export { HeaderMain };