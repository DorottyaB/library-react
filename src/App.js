import { useContext } from 'react';
import BookContextProvider from './context/bookContext';
import FormContextProvider from './context/formContext';
import { ThemeContext } from './context/themeContext';
import Header from './components/header/Header';
import BookList from './components/book-list/BookList';
import ShowForm from './components/show-form/ShowForm';
import Footer from './components/footer/Footer';
import SearchBar from './components/search-bar/SearchBar';
import './App.css';

function App() {
  const { getTheme } = useContext(ThemeContext);

  return (
    <FormContextProvider>
      <BookContextProvider>
        <div className='App' style={{ backgroundColor: getTheme.bg, color: getTheme.text }}>
          <Header />
          <main>
            <SearchBar />
            <ShowForm />
            <BookList />
          </main>
          <Footer />
        </div>
      </BookContextProvider>
    </FormContextProvider>
  );
}

export default App;
