import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };
  return (
    <div className="toggle-btn-section">
      <div className={`toggle-checkbox m-vertical-auto`}>
        <input
          className="toggle-btn__input"
          type="checkbox"
          name="checkbox"
          onChange={handleThemeChange}
          checked={theme === 'light'}
        />
        <button
          type="button"
          className={`toggle-btn__input-label`}
          onClick={handleThemeChange}
        ></button>
      </div>
    </div>
  );
};

export default ThemeToggle;
