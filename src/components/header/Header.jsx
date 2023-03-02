import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import logo from '../../assets/books-light.svg';
import './header.css';

const Header = () => {
  const { getTheme, theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <div className='logo-container'>
        <img src={logo} alt='logo' />
        <h1>library</h1>
      </div>
      <div className='switch-container'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill={getTheme.text}
          viewBox='0 0 256 256'
        >
          <rect width='256' height='256' fill='none'></rect>
          <circle cx='128' cy='128' r='68'></circle>
          <path d='M128,44a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8,8,0,0,0,128,44Z'></path>
          <path d='M57.3,68.6a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3L54.5,43.1A8.1,8.1,0,1,0,43.1,54.5Z'></path>
          <path d='M44,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8,8,0,0,0,44,128Z'></path>
          <path d='M57.3,187.4,43.1,201.5a8.1,8.1,0,0,0,0,11.4,8.5,8.5,0,0,0,5.7,2.3,8.3,8.3,0,0,0,5.7-2.3l14.1-14.2a8,8,0,0,0-11.3-11.3Z'></path>
          <path d='M128,212a8,8,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8,8,0,0,0,128,212Z'></path>
          <path d='M198.7,187.4a8,8,0,0,0-11.3,11.3l14.1,14.2a8.3,8.3,0,0,0,5.7,2.3,8.5,8.5,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4Z'></path>
          <path d='M240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16Z'></path>
          <path d='M193.1,70.9a7.8,7.8,0,0,0,5.6-2.3l14.2-14.1a8.1,8.1,0,0,0-11.4-11.4L187.4,57.3a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,193.1,70.9Z'></path>
        </svg>
        <label className='switch'>
          <input type='checkbox' onChange={toggleTheme} checked={!theme.isLightTheme} />
          <span className='slider round'></span>
        </label>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill={getTheme.text}
          viewBox='0 0 256 256'
        >
          <rect width='256' height='256' fill='none'></rect>
          <path d='M224.3,150.3a8.1,8.1,0,0,0-7.8-5.7l-2.2.4A84,84,0,0,1,111,41.6a5.7,5.7,0,0,0,.3-1.8A7.9,7.9,0,0,0,101,31.7,100,100,0,1,0,224.3,154.9,7.2,7.2,0,0,0,224.3,150.3Z'></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
