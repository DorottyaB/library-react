import { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import './sorting-menu.css';

const SortingMenu = () => {
  const [sortBy, setSortBy] = useState('');
  const { dispatch } = useContext(BookContext);
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(event) {
    const { value } = event.target;
    setSortBy(value);
    dispatch({
      type: value,
    });
  }

  return (
    <div className='sorting-menu-container'>
      {!isOpen ? (
        <div className='sorting-icon-container' title='Sort by' onClick={() => setIsOpen(true)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#000'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
            />
          </svg>
        </div>
      ) : (
        <div className='sorting-menu'>
          <p>Sort by</p>
          <input
            type='radio'
            name='sort'
            id='author'
            value='sort_by_author'
            checked={sortBy === 'sort_by_author'}
            onChange={handleChange}
            onClick={() => setIsOpen(false)}
          />
          <label htmlFor='author'>Author</label>
          <input
            type='radio'
            name='sort'
            id='read'
            value='sort_by_read'
            checked={sortBy === 'sort_by_read'}
            onChange={handleChange}
            onClick={() => setIsOpen(false)}
          />
          <label htmlFor='read'>Read</label>
          <input
            type='radio'
            name='sort'
            id='newest'
            value='sort_by_newest'
            checked={sortBy === 'sort_by_newest'}
            onChange={handleChange}
            onClick={() => setIsOpen(false)}
          />
          <label htmlFor='newest'>Newest</label>
          <input
            type='radio'
            name='sort'
            id='oldest'
            value='sort_by_oldest'
            checked={sortBy === 'sort_by_oldest'}
            onChange={handleChange}
            onClick={() => setIsOpen(false)}
          />
          <label htmlFor='oldest'>Oldest</label>
        </div>
      )}
    </div>
  );
};

export default SortingMenu;
