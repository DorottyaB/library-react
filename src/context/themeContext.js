import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState({
    isLightTheme: !prefersDark,
    light: {
      bg: '#EEEEEE',
      cardBg: '#F9F9F9',
      text: '#070707',
    },
    dark: {
      bg: '#131821',
      cardBg: '#19202E',
      text: '#e2e2e2',
    },
  });

  function toggleTheme() {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  }

  const getTheme = theme.isLightTheme ? theme.light : theme.dark;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, getTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
