import './App.css';
import Header from './components/header/Header';
import BookList from './components/book-list/BookList';
import BookContextProvider from './context/bookContext';
import FormContextProvider from './context/formContext';
import ShowForm from './components/show-form/ShowForm';
import Footer from './components/footer/Footer';

function App() {
  return (
    <FormContextProvider>
      <BookContextProvider>
        <div className='App'>
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
