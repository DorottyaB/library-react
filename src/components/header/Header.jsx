import { useContext } from 'react';
import logo from '../../assets/books-light.svg';
import { FormContext } from '../../context/formContext';
import Button from '../button/Button';
import './header.css';

const Header = () => {
  const { setIsShown } = useContext(FormContext);

  return (
    <header>
      <div className='logo-container'>
        <img src={logo} alt='logo' />
        <h1>library</h1>
      </div>
      <Button value='ADD NEW BOOK' color='primary' handleClick={() => setIsShown(true)} />
    </header>
  );
};

export default Header;
