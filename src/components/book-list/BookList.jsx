import { useContext, useState } from 'react';
import { BookContext } from '../../context/bookContext';
import { FormContext } from '../../context/formContext';
import BookDetails from '../book-details/BookDetails';
import SortingMenu from '../sorting-menu/SortingMenu';
import Button from '../button/Button';
import './book-list.css';
import image from '../../assets/books.png';

const BookList = () => {
  const { books, bookList } = useContext(BookContext);
  const { setIsShown } = useContext(FormContext);
  const [index, setIndex] = useState([0, 5]);

  function loadMore() {
    setIndex(prevValue => {
      return [0, prevValue[1] + 5];
    });
  }

  return bookList.length ? (
    <>
      <div className='book-list'>
        <div className='row'>
          <Button value='+' color='primary' handleClick={() => setIsShown(true)} />
          <SortingMenu />
        </div>
        <ul>
          {bookList.slice(index[0], index[1]).map(book => {
            return <BookDetails book={book} key={book.id} />;
          })}
        </ul>
      </div>
      {bookList.length > index[1] ? (
        <button className='btn-load' onClick={loadMore}>
          Load more
        </button>
      ) : null}
    </>
  ) : !books.length ? (
    <div className='get-started'>
      <Button value='ADD NEW BOOK' color='primary' handleClick={() => setIsShown(true)} />
      <img src={image} alt='Stack of books' className='get-started-icon' />
    </div>
  ) : (
    <div className='get-started'>
      <h3 style={{ marginBottom: '15px', opacity: 0.7 }}>No Book Found</h3>
      <Button value='ADD NEW BOOK' color='primary' handleClick={() => setIsShown(true)} />
    </div>
  );
};

export default BookList;
