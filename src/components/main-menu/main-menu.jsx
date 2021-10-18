import React from 'react';

const MainMenu = ({ menuItems }) => {
  return (
    <ul className="main-menu">
      {menuItems.map((menuItem, menuItemIndex) => 
        <li className="main-menu__item" key={menuItemIndex}>
          <a className="main-menu__link" href={`/${menuItem.href}`}>
            {menuItem.label}
          </a>
        </li>
      )}
    </ul>
  );
};

export default MainMenu;