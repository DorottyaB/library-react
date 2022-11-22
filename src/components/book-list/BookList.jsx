import { useContext } from 'react';
import { BookContext } from '../../context/bookContext';
import BookDetails from '../book-details/BookDetails';
import './book-list.css';
import image from '../../assets/books.png';

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className='book-list'>
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className='get-started'>
      <h2 className='get-started-text'>Add books to your library</h2>
      <img src={image} alt='Stack of books' className='get-started-icon' />
    </div>
  );
};

export default BookList;
