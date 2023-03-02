import { useContext, useState } from 'react';
import { BookContext } from '../../context/bookContext';
import { ThemeContext } from '../../context/themeContext';
import './sorting-menu.css';

const SortingMenu = () => {
  const { getTheme } = useContext(ThemeContext);
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
        <div
          className='sorting-icon-container'
          style={{ backgroundColor: getTheme.cardBg }}
          title='Sort by'
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke={getTheme.text}
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
          <p style={{ color: getTheme.text }}>Sort by</p>
          <input
            type='radio'
            name='sort'
            id='author'
            value='sort_by_author'
            checked={sortBy === 'sort_by_author'}
            onChange={handleChange}
            onClick={() => setIsOpen(false)}
          />
          <label
            htmlFor='author'
            style={{ backgroundColor: getTheme.cardBg, color: getTheme.text }}
          >
            Author
          </label>
          <input
            type='radio'
            name='sort'
            id='read'
            value='sort_by_read'
            checked={sortBy === 'sort_by_read'}
            onChange={handleChange}
            onClick={() => setIsOpen(false)}
          />
          <label htmlFor='read' style={{ backgroundColor: getTheme.cardBg, color: getTheme.text }}>
            Read
          </label>
          <input
            type='radio'
            name='sort'
            id='favorite'
            value='sort_by_favorite'
            checked={sortBy === 'sort_by_favorite'}
            onChange={handleChange}
            onClick={() => setIsOpen(false)}
          />
          <label
            htmlFor='favorite'
            style={{ backgroundColor: getTheme.cardBg, color: getTheme.text }}
          >
            Favorite
          </label>
          <input
            type='radio'
            name='sort'
            id='newest'
            value='sort_by_newest'
            checked={sortBy === 'sort_by_newest'}
            onChange={handleChange}
            onClick={() => setIsOpen(false)}
          />
          <label
            htmlFor='newest'
            style={{ backgroundColor: getTheme.cardBg, color: getTheme.text }}
          >
            Newest
          </label>
          <input
            type='radio'
            name='sort'
            id='oldest'
            value='sort_by_oldest'
            checked={sortBy === 'sort_by_oldest'}
            onChange={handleChange}
            onClick={() => setIsOpen(false)}
          />
          <label
            htmlFor='oldest'
            style={{ backgroundColor: getTheme.cardBg, color: getTheme.text }}
          >
            Oldest
          </label>
        </div>
      )}
    </div>
  );
};

export default SortingMenu;
