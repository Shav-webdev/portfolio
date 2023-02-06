import { navigation } from 'helpers/constants';
import './style.scss';
import { Link } from 'react-scroll';
import HamburgerMenu from '../HamburgerMenu';
import ThemeToggle from '../ThemeToggle';

const Navigation = () => {
  const handleSetActive = function (to: any) {};
  return (
    <nav className={'nav'}>
      <HamburgerMenu />
      <ul className={'menu'}>
        {navigation.map((el) => {
          return (
            <li className={'menu-item'} key={el.id}>
              <Link
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
      <ThemeToggle />
    </nav>
  );
};

export default Navigation;
