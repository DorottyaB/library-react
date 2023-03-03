import { createContext, useEffect, useReducer, useState } from 'react';
import { bookReducer } from '../reducer/bookReducer';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  const [query, setQuery] = useState('');
  const [bookList, setBookList] = useState(books);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    const newBookList = books.filter(
      book => book.title.toLowerCase().includes(query) || book.genre.includes(query)
    );
    if (!query.length) {
      setBookList(books);
    } else {
      setBookList(newBookList);
    }
  }, [books, query]);

  return (
    <BookContext.Provider value={{ books, bookList, dispatch, setQuery }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
