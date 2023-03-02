import { useContext } from 'react';
import { BookContext } from '../../context/bookContext';
import BookDetails from '../book-details/BookDetails';
import './book-list.css';
import image from '../../assets/books.png';
import SortingMenu from '../sorting-menu/SortingMenu';
import Button from '../button/Button';
import { FormContext } from '../../context/formContext';

const BookList = () => {
  const { books } = useContext(BookContext);
  const { setIsShown } = useContext(FormContext);

  return books.length ? (
    <div className='book-list'>
      <div className='row'>
        <Button value='+' color='primary' handleClick={() => setIsShown(true)} />
        <SortingMenu />
      </div>
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className='get-started'>
      <Button value='ADD NEW BOOK' color='primary' handleClick={() => setIsShown(true)} />
      <img src={image} alt='Stack of books' className='get-started-icon' />
    </div>
  );
};

export default BookList;
