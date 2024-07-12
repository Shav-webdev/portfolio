import { FC } from 'react';
import './styles.scss';
import Navigation from '../components/Navigation';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
