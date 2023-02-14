import { useState, useEffect, useRef } from 'react';
import sun from './../../img/icons/sun.svg';
import moon from './../../img/icons/moon.svg';
import './style.css';

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useState('light');
  const buttonRef = useRef(null);
  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light';
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      buttonRef.current.classList.add('darkmode-button--active');
    } else {
      document.body.classList.remove('dark');
      buttonRef.current.classList.remove('darkmode-button--active');
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <button
      ref={buttonRef}
      className="darkmode-button"
      onClick={toggleDarkMode}
    >
      <img className="darkmode-button__icon" src={sun} alt="sun" />
      <img className="darkmode-button__icon" src={moon} alt="moon" />
    </button>
  );
};
export default ButtonDarkMode;
