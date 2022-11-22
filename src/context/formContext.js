import { createContext, useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = props => {
  const [isShown, setIsShown] = useState(false);

  return (
    <FormContext.Provider value={{ isShown, setIsShown }}>{props.children}</FormContext.Provider>
  );
};

export default FormContextProvider;
