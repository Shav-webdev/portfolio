import { FC } from 'react';
import './styles.scss';
import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Navigation />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
