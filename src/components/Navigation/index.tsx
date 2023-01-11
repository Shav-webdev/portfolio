import { navigation } from 'helpers/constants';
import './style.scss';
import { Link } from 'react-scroll';

const Navigation = () => {
  const handleSetActive = function (to: any) {};
  return (
    <nav className={'nav'}>
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
    </nav>
  );
};

export default Navigation;
