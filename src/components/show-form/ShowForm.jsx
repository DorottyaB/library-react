import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import NewBookForm from '../form/NewBookForm';

const ShowForm = () => {
  const { isShown } = useContext(FormContext);
  return <>{isShown && <NewBookForm />}</>;
};

export default ShowForm;
