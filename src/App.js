import './App.css';
import Header from './components/header/Header';
import BookList from './components/book-list/BookList';
import BookContextProvider from './context/bookContext';
import FormContextProvider from './context/formContext';
import ShowForm from './components/show-form/ShowForm';
import Footer from './components/footer/Footer';
import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';

function App() {
  const { getTheme } = useContext(ThemeContext);

  return (
    <FormContextProvider>
      <BookContextProvider>
        <div className='App' style={{ backgroundColor: getTheme.bg, color: getTheme.text }}>
          <Header />
          <main>
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
