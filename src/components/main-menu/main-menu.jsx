import React from 'react';
import PropTypes from 'prop-types';

const MainMenu = ({ menuItems, isHeaderMenu = false }) => {
  return (
    <ul className={`main-menu${isHeaderMenu ? ` main-menu--header` : ``}`}>
      {menuItems.map((menuItem, menuItemIndex) => 
        <li className="main-menu__item" key={menuItemIndex}>
          <a className="main-menu__link" href={`/${menuItem.HREF}`}>
            {menuItem.LABEL}
          </a>
        </li>
      )}
    </ul>
  );
};

MainMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      HREF: PropTypes.string.isRequired,
      LABEL: PropTypes.string.isRequired
    })
  ),
  isHeaderMenu: PropTypes.bool
};

export default MainMenu;