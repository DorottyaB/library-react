import { v4 as uuidv4 } from 'uuid';
import { useContext, useState } from 'react';
import { BookContext } from '../../context/bookContext';
import { FormContext } from '../../context/formContext';
import './new-book-form.css';
import { ThemeContext } from '../../context/themeContext';

const NewBookForm = () => {
  const { getTheme } = useContext(ThemeContext);

  const { setIsShown } = useContext(FormContext);
  const [book, setBook] = useState({
    author: '',
    title: '',
    genre: [],
    pages: '',
    isRead: false,
    isFavorite: false,
    id: null,
    date: null,
  });

  const handleChange = e => {
    const target = e.target;
    const value =
      target.type === 'checkbox'
        ? target.checked
        : target.name === 'genre'
        ? Array.from(target.value.trim().toLowerCase().split(','))
        : target.value;
    const name = target.name;
    setBook(prevFormData => {
      return {
        ...prevFormData,
        [name]: value,
        id: uuidv4(),
        date: new Date().getTime(),
      };
    });
  };

  const { dispatch } = useContext(BookContext);

  function handleAddBook(e) {
    e.preventDefault();
    dispatch({
      type: 'added',
      book: book,
    });
    setIsShown(false);
  }

  return (
    <div className='overlay'>
      <div className='form-container' style={{ backgroundColor: getTheme.cardBg }}>
        <form onSubmit={handleAddBook} className='add-book-form'>
          <div className='form-group'>
            <label htmlFor='author'>Author:</label>
            <input
              type='text'
              value={book.author}
              onChange={handleChange}
              name='author'
              required
              style={{ borderBottomColor: getTheme.text, color: getTheme.text }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              name='title'
              value={book.title}
              onChange={handleChange}
              required
              style={{ borderBottomColor: getTheme.text, color: getTheme.text }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='genre'>Genre:</label>
            <input
              type='text'
              name='genre'
              autoComplete='off'
              value={book.genre}
              onChange={handleChange}
              required
              style={{ borderBottomColor: getTheme.text, color: getTheme.text }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='pages'>
              Number of pages <span style={{ fontSize: '13px' }}>(optional)</span>:
            </label>
            <input
              type='number'
              name='pages'
              value={book.pages}
              onChange={handleChange}
              style={{ borderBottomColor: getTheme.text, color: getTheme.text }}
            />
          </div>
          <div className='form-group is-read'>
            <label>Have you read it?</label>
            <input
              className='is-read-checkbox'
              name='isRead'
              type='checkbox'
              checked={book.isRead}
              value={book.isRead}
              onChange={handleChange}
              style={{ borderColor: getTheme.text }}
            />
          </div>
          <input type='submit' className='submit-btn' value='+ ADD BOOK' />
        </form>
        <button
          className='cancel-btn'
          onClick={() => setIsShown(false)}
          style={{ color: getTheme.text }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewBookForm;
