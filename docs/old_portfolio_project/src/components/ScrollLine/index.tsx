import { useEffect, useState } from 'react';
import './style.scss';

const ScrollLine = () => {
  const [scrollWidth, setScrollWidth] = useState('0');

  const fillScrollLine = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
    setScrollWidth(`${percentScrolled}%`);
  };

  useEffect(() => {
    window.addEventListener('scroll', fillScrollLine);
    return () => {
      window.removeEventListener('scroll', fillScrollLine);
    };
  }, []);

  return <div style={{ width: scrollWidth }} className="scroll-line"></div>;
};

export default ScrollLine;
