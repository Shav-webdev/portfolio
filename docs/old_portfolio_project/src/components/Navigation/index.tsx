import React, { useCallback, useContext } from 'react';
import './style.scss';
import { Link } from 'react-scroll';
import ThemeToggle from '../ThemeToggle';
import HamburgerMenu from '../HamburgerMenu';
import { navigation } from 'helpers/constants';
import { UIContext } from '../../contexts/UIContext';

const Navigation = () => {
  const handleSetActive = function (to: any) {};
  const { toggleMobileMenu, isMenuClosed, isMobileView } =
    useContext(UIContext);

  const handleLinkClick = useCallback(() => {
    if (isMobileView) {
      toggleMobileMenu();
    }
  }, [toggleMobileMenu, isMobileView]);

  return (
    <div className={`nav-wrapper ${isMenuClosed ? 'is-closed' : 'is-open'}`}>
      <HamburgerMenu />
      <nav className={'nav'}>
        <ul className={'menu'}>
          {navigation.map((el) => {
            return (
              <li className={'menu-item'} key={el.id}>
                <Link
                  onClick={() => handleLinkClick()}
                  activeClass="active"
                  to={el.to}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={handleSetActive}
                  className={'menu-item-link'}
                >
                  {el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ThemeToggle />
    </div>
  );
};

export default Navigation;
