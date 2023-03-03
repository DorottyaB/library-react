import { useContext } from 'react';
import { BookContext } from '../../context/bookContext';
import { ThemeContext } from '../../context/themeContext';
import Button from '../button/Button';
import checked from '../../assets/check-circle-fill.svg';
import unchecked from '../../assets/check-circle.svg';
import notFavorite from '../../assets/heart.svg';
import favorite from '../../assets/heart-fill.svg';
import remove from '../../assets/x-circle.svg';
import './book-details.css';

const BookDetails = ({ book }) => {
  const { getTheme } = useContext(ThemeContext);
  const { dispatch } = useContext(BookContext);

  function handleChangeBook(book) {
    dispatch({
      type: 'changed',
      book: { ...book, isRead: !book.isRead },
    });
  }

  function handleFavoriteBook(book) {
    dispatch({
      type: 'changed',
      book: { ...book, isFavorite: !book.isFavorite },
    });
  }

  function handleDeleteBook(bookId) {
    dispatch({
      type: 'deleted',
      id: bookId,
    });
  }

  return (
    <li className='book-row' style={{ backgroundColor: getTheme.cardBg, color: getTheme.text }}>
      <div className='book-details'>
        <h3 className='title'>{book.title}</h3>
        <h4 className='author'>by {book.author}</h4>
        {book.genre && <p className='genre'>{book.genre.toString()}</p>}
        {book.pages && <p className='pages'>{book.pages} pages</p>}
      </div>
      <div className='button-group'>
        <Button
          handleClick={() => handleChangeBook(book)}
          color=''
          value={
            book.isRead ? (
              <img src={checked} width='30' height='30' alt='Read' />
            ) : (
              <img src={unchecked} width='30' height='30' alt='Not read' />
            )
          }
          title='Toggle read'
        />
        <Button
          handleClick={() => handleFavoriteBook(book)}
          color=''
          value={
            book.isFavorite ? (
              <img src={favorite} width='30' height='30' alt='Favorite' />
            ) : (
              <img src={notFavorite} width='30' height='30' alt='Not favorite' />
            )
          }
          title='Add to favorites'
        />
        <Button
          color=''
          value={<img src={remove} width='30' height='30' alt='Remove' />}
          handleClick={() => handleDeleteBook(book.id)}
          title='Remove'
        />
      </div>
    </li>
  );
};

export default BookDetails;
