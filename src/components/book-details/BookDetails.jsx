import { useContext } from 'react';
import { BookContext } from '../../context/bookContext';
import Button from '../button/Button';
import './book-details.css';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);

  function handleChangeBook(book) {
    dispatch({
      type: 'changed',
      book: { ...book, isRead: !book.isRead },
    });
  }

  function handleDeleteBook(bookId) {
    dispatch({
      type: 'deleted',
      id: bookId,
    });
  }

  return (
    <li className='book-row'>
      <div className='book-details'>
        <h3 className='title'>{book.title}</h3>
        <h4 className='author'>by {book.author}</h4>
        {book.pages && <p className='pages'>{book.pages} pages</p>}
      </div>
      <div className='button-group'>
        <Button
          handleClick={() => handleChangeBook(book)}
          color='primary'
          value={book.isRead ? 'Read' : 'Not Read'}
        />
        <Button color='secondary' value='Remove' handleClick={() => handleDeleteBook(book.id)} />
      </div>
    </li>
  );
};

export default BookDetails;
