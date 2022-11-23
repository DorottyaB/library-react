import { v4 as uuidv4 } from 'uuid';
import { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { FormContext } from '../../context/FormContext';
import './new-book-form.css';

const NewBookForm = () => {
  const { setIsShown } = useContext(FormContext);
  const [book, setBook] = useState({
    author: '',
    title: '',
    pages: '',
    isRead: false,
    id: null,
  });

  const handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setBook(prevFormData => {
      return {
        ...prevFormData,
        [name]: value,
        id: uuidv4(),
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
      <div className='form-container'>
        <form onSubmit={handleAddBook} className='add-book-form'>
          <div className='form-group'>
            <label htmlFor='author'>Author:</label>
            <input type='text' value={book.author} onChange={handleChange} name='author' />
          </div>
          <div className='form-group'>
            <label htmlFor='title'>Title:</label>
            <input type='text' name='title' value={book.title} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='pages'>Number of pages:</label>
            <input type='number' name='pages' value={book.pages} onChange={handleChange} />
          </div>
          <div className='form-group is-read'>
            <label>Have you read it?</label>
            <input
              name='isRead'
              type='checkbox'
              checked={book.isRead}
              value={book.isRead}
              onChange={handleChange}
            />
          </div>
          <input type='submit' className='submit-btn' value='ADD BOOK' />
        </form>
        <button className='cancel-btn' onClick={() => setIsShown(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewBookForm;
