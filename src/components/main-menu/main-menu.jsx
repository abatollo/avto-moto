import React from 'react';

const MainMenu = ({ menuItems, isHeaderMenu = false }) => {
  return (
    <ul className={`main-menu${isHeaderMenu ? ` main-menu--header` : ``}`}>
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