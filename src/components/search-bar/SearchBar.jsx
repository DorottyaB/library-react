import { useContext } from 'react';
import { BookContext } from '../../context/bookContext';
import { ThemeContext } from '../../context/themeContext';
import searchIcon from '../../assets/magnifying-glass.svg';
import genreIcon from '../../assets/mask-happy.svg';
import './search-bar.css';

const SearchBar = () => {
  const { query, setQuery, books } = useContext(BookContext);
  const { getTheme } = useContext(ThemeContext);

  const genre = books.length > 0 ? books.map(book => book.genre.map(g => g.trim())).flat(1) : [];
  // console.log([...new Set(genre)].map(g => g.trimStart()));
  const genreArray = genre.filter((value, index, array) => array.indexOf(value) === index);

  function handleSearch(e) {
    const { value } = e.target;
    setQuery(value.toLowerCase());
  }

  return (
    <form className='search-form' style={{ backgroundColor: getTheme.cardBg }}>
      <div className='form-group'>
        <label htmlFor='searchBooks'>
          <img src={searchIcon} width='26' height='26' alt='Search' />
        </label>
        <input
          type='search'
          name='q'
          id='searchBooks'
          placeholder='Search by title...'
          onInput={handleSearch}
          value={query}
        />
      </div>
      <span style={{ backgroundColor: getTheme.bg }}></span>
      <div className='form-group custom-select'>
        <label htmlFor='searchGenre'>
          <img src={genreIcon} width='26' height='26' alt='Genre' />
        </label>
        <select
          onChange={handleSearch}
          style={{ backgroundColor: getTheme.cardBg, color: '#7b7b7b' }}
          defaultValue='0'
        >
          <option value='0' disabled>
            Filter by genre...
          </option>
          <option value='' style={{ color: getTheme.text }}>
            All
          </option>
          {genreArray.map((g, idx) => (
            <option key={idx} value={g} style={{ color: getTheme.text }}>
              {g}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchBar;
